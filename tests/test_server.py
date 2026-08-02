import threading
import unittest
from http.client import HTTPConnection

from server import Handler, ThreadingHTTPServer


class ServerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.port = cls.server.server_address[1]

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join(timeout=2)

    def request(self, method, path, body=None, headers=None):
        conn = HTTPConnection("127.0.0.1", self.port, timeout=2)
        conn.request(method, path, body=body, headers=headers or {})
        response = conn.getresponse()
        payload = response.read()
        conn.close()
        return response, payload

    def test_health_endpoint(self):
        response, payload = self.request("GET", "/api/health")
        self.assertEqual(response.status, 200)
        self.assertIn(b'"ok": true', payload)

    def test_hidden_git_files_are_not_served(self):
        response, _ = self.request("GET", "/.git/config")
        self.assertEqual(response.status, 404)

    def test_hidden_cache_files_are_not_served(self):
        response, _ = self.request("GET", "/.tts-cache/example.mp3")
        self.assertEqual(response.status, 404)

    def test_server_source_is_not_served(self):
        response, _ = self.request("GET", "/server.py")
        self.assertEqual(response.status, 404)

    def test_large_tts_request_is_rejected(self):
        response, _ = self.request(
            "POST",
            "/api/tts",
            body=b"{}",
            headers={
                "Content-Length": str(16 * 1024 + 1),
                "Content-Type": "application/json",
            },
        )
        self.assertEqual(response.status, 413)


if __name__ == "__main__":
    unittest.main()
