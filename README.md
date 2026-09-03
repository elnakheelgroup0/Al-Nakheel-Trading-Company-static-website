# Al Nakheel Trading Company static website

A bilingual, two-page-per-language static website for Al Nakheel Trading Company / شركة النخيل للتجارة والتوريدات والمقاولات العامة.

## Folder structure

```text
.
├── ar/
│   ├── index.html
│   └── contact.html
├── en/
│   ├── index.html
│   └── contact.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── al-nakheel-brand.png
└── README.md
```

## Before publishing

The contact form validates the name, phone, and message in the browser, then opens the visitor's email app using `mailto:info@alnakheeltrading.com`. If the company uses another email address, replace `info@alnakheeltrading.com` in both contact pages before publishing.

The WhatsApp link is already set to `https://wa.me/201200000031` on every page.

### Optional Formspree setup

If you prefer Formspree instead of email-app fallback:

1. Create a form at [Formspree](https://formspree.io/) and copy its form endpoint.
2. In both `ar/contact.html` and `en/contact.html`, replace the form `action` value with the Formspree endpoint.
3. Remove the `data-contact-form` attribute so the JavaScript does not intercept the form submission.
4. Keep the `required` attributes; browser validation will remain active. You can remove `novalidate` if you want the browser's built-in error messages as well.

## Deploy with cPanel File Manager

1. Open your hosting provider's **cPanel** and select **File Manager**.
2. Open the folder assigned to your domain, usually `public_html`. If the website is for an add-on domain, open that domain's document-root folder instead.
3. Create a ZIP archive containing the contents of this project folder. The archive must contain `ar`, `en`, `assets`, and `README.md` at its top level—not an extra enclosing project folder.
4. Upload the ZIP archive to the document-root folder.
5. Select the archive and choose **Extract**.
6. Visit `https://your-domain.example/en/` for English and `https://your-domain.example/ar/` for Arabic.

## Deploy with FTP

1. Get the FTP hostname, username, password, and port from your hosting provider.
2. Connect with an FTP client such as FileZilla.
3. Open the domain's document-root folder, usually `public_html`.
4. Upload the `ar`, `en`, and `assets` folders to that folder. Upload `README.md` only if you want to keep it on the server; it is not required by the site.
5. Confirm the site at `https://your-domain.example/en/` and `https://your-domain.example/ar/`.

## Optional: Netlify

1. Sign in to [Netlify](https://www.netlify.com/).
2. Choose **Add new site** → **Deploy manually**.
3. Drag the project folder (or a ZIP whose top level contains `ar`, `en`, and `assets`) into the upload area.
4. After deployment, open the generated site URL and optionally attach a custom domain in **Domain management**.
5. Use `/en/` or `/ar/` at the end of the site URL to open each language home page.

## Optional: Cloudflare Pages

1. Sign in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Open **Workers & Pages** → **Create application** → **Pages** → **Upload assets**.
3. Enter a project name, then upload a ZIP whose top level contains `ar`, `en`, and `assets`.
4. Select **Deploy site**.
5. Open the new Pages URL with `/en/` or `/ar/`, then add a custom domain if needed.
