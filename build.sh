#!/usr/bin/env bash

set -eu

cd functions
npm install
cd ..
netlify-lambda build functions
