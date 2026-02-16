#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Starting deCompose Presentation..."
echo "Opening browser in 2 seconds..."
echo ""
python3 -m http.server 8080 &
SERVER_PID=$!
sleep 2
open "http://localhost:8080"
echo ""
echo "✅ Presentation running at http://localhost:8080"
echo "Press Ctrl+C to stop the server"
wait $SERVER_PID
