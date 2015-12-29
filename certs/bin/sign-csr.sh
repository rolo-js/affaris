#!/bin/bash
set -u
set -e

# Sign the request from Device with your Root CA
openssl x509 \
  -req -in ../tmp/affaris.csr.pem \
  -sha256 \
  -CA ../ca/ari-ca.crt.pem \
  -CAkey ../ca/ari-ca.key.pem \
  -CAcreateserial \
  -out ../server/affaris.crt.pem \
  -days 1095

# If you already have a serial file, you would use that (in place of CAcreateserial)
# -CAserial certs/ca/my-root-ca.srl
