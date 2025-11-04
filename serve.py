#!/usr/bin/env python3
"""Simple HTTP server to serve the birthday page"""
import http.server
import socketserver
import os

PORT = 5000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add headers for better audio/video support
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🎉 Birthday page server running!")
        print(f"🌐 Open: http://0.0.0.0:{PORT}")
        print(f"📱 Or visit the Replit webview URL")
        print(f"\n⚠️  Don't forget to add: assets/happy_birthday.mp3")
        print(f"📖 See README.md for audio sources\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")
