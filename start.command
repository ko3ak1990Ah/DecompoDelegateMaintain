#!/bin/bash
cd "$(dirname "$0")"
APP_BASE="DecompoDelegateMaintain"

cleanup_ports() {
	for port in 8080 8081 8082 3000; do
		pids=$(lsof -tiTCP:"$port" -sTCP:LISTEN -n -P 2>/dev/null | tr '\n' ' ')
		if [ -n "$pids" ]; then
			echo "Closing listeners on $port: $pids"
			kill $pids 2>/dev/null || true
			sleep 1

			still=$(lsof -tiTCP:"$port" -sTCP:LISTEN -n -P 2>/dev/null | tr '\n' ' ')
			if [ -n "$still" ]; then
				kill -9 $still 2>/dev/null || true
			fi
		fi
	done
}

find_free_port() {
	for port in 8080 8081 8082 3000; do
		if ! lsof -iTCP:"$port" -sTCP:LISTEN -n -P >/dev/null 2>&1; then
			echo "$port"
			return 0
		fi
	done
	return 1
}

# Mirror GitHub Pages base path for local static hosting.
mkdir -p "$APP_BASE"
ln -sfn ../assets "$APP_BASE/assets"
ln -sfn ../index.html "$APP_BASE/index.html"

cleanup_ports

PORT="$(find_free_port)"
if [ -z "$PORT" ]; then
	echo "Could not find a free port (tried: 8080, 8081, 8082, 3000)."
	exit 1
fi

echo "Starting deCompose Presentation..."
echo "Using port $PORT"
echo "Opening browser in 2 seconds..."
echo ""
python3 -m http.server "$PORT" &
SERVER_PID=$!
sleep 2
open "http://localhost:$PORT/$APP_BASE/"
echo ""
echo "Presentation running at http://localhost:$PORT/$APP_BASE/"
echo "Press Ctrl+C to stop the server"
wait $SERVER_PID
