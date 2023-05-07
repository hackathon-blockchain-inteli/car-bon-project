#!/bin/sh

# Run the python script with 'rollup-init' command of the Cartesi Machine.
#rollup-init python3 carbon_ia.py
set -e
export PATH="/opt/venv/bin:$PATH"
rollup-init python3 -m carbon_ia