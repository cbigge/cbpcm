# Sprint Five - Reflection
I had several problems while setting up both the `dex` and `flask` SSO servers. Nothing took me too long to solve, just had to diagnose and fix the few issues. Some of the issues that happened were:
- When doing the `make` command for the `dex` project, my `go env` variables weren't configured causing an error
- My user profile had a space in it that the `make` didn't escape, so I had to add quotes around the related lines
- I didn't set up the Google OAuth settings correctly at first
- I didn't use the correct `GOOGLE_CLIENT_SECRET` causing an `invalid client` error
Sites I visited while setting up the SSO servers:
- stackoverflow to figure out how to escape my profile name
- RealPython while trying to solve the `invalid client` error
- github.com/dexidp/dex
- github.com/computationmystic/MU-Software-Engineering
By the end of the semester, I would love to have a fitness and nutrition tracking app that takes in user input and tracks progress and provides helpful visualization to help people on their fitness and nutritional journies.
