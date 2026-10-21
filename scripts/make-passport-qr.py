"""Generate the scannable QR code printed on the demo hangtag of the Digital Product Passport page.

Usage:  python3 scripts/make-passport-qr.py [URL]
Writes  src/assets/passport/demo-qr.svg  (keep the URL in sync with DPP_DEMO_URL in src/data/passportContent.ts).
"""
import sys
import qrcode
import qrcode.image.svg

URL = sys.argv[1] if len(sys.argv) > 1 else 'https://tierratrace.in/#/platform/passport?s=dpp-demo'
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=2, box_size=10)
qr.add_data(URL)
qr.make(fit=True)
img = qr.make_image(image_factory=qrcode.image.svg.SvgPathFillImage, fill_color='#101512', back_color='#ffffff')
img.save('src/assets/passport/demo-qr.svg')
print('QR for', URL, '-> src/assets/passport/demo-qr.svg', f'({qr.modules_count} modules)')
