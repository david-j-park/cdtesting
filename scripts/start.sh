#!/bin/bash
export PORT=3000
cd /var/app/testapp
forever start app.js
