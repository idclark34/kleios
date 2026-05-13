# Kleios Privacy Policy

**Last updated:** May 5, 2026

Kleios is a small competitive self-improvement app, currently in friends-and-family beta. This document describes what data the app collects, where it's stored, who can see it, and how to get it deleted.

## What we collect

When you create a Kleios account, the app collects:

- **Email address** — used to authenticate you and send login-related messages.
- **Display name and handle** — names you choose during sign-up. Friends use your handle to invite you.
- **Photos you upload** — when you submit a daily challenge, your photo is uploaded so the AI can verify the challenge was completed. Photos are linked to your account.
- **Categories you opt into** — the self-improvement areas you've chosen (cooking, reading, exercise, etc.).
- **Submission history** — which challenges you've passed or failed, when, and the AI's verdict.
- **Friend graph** — invitations you send and accept, and the resulting accepted-friend relationships.
- **Timezone** — auto-detected from your device, used to schedule daily challenges in your local day.

If you sign in as a guest, the app skips email/handle collection — you get an anonymous account that lives only on your device until you choose to upgrade.

### Hashed contacts (optional)

If you tap "Find from contacts" inside Kleios, the app reads your iOS Contacts and sends irreversible SHA-256 hashes of your contacts' phone numbers (and the names you have saved for them) to our servers. We use these to tell you which of your contacts already use Kleios. We never receive the raw phone numbers, never share these hashes with anyone, and delete them automatically when you delete your Kleios account.

## What we don't collect

- No tracking across other apps or websites.
- No advertising identifiers.
- No analytics SDKs.
- No location beyond the timezone listed above.
- No raw contact data — only hashed phone numbers and the names you've saved, and only if you opt in via Find from contacts.

## Where data is stored

- All app data (account info, photos, submissions, friend relationships) is stored in [Supabase](https://supabase.com), a managed database and storage provider, hosted in their U.S. region.
- Photos are processed by [Anthropic](https://www.anthropic.com)'s Claude API for verification. Anthropic does not retain photos after processing per their API data handling policy.
- Authentication tokens are stored on your device using iOS's secure keychain.

## Who can see your data

- **You** — full access to everything tied to your account via the Profile and Home screens.
- **Friends you've accepted** — can see your handle, display name, opted-in categories, streaks, and your *passed* challenge submissions (including the photos). Friends cannot see failed or pending submissions, your email, or any other data.
- **No one else** — Kleios staff (currently a single developer) does not view individual account data outside of debugging an issue you've reported.

## Data deletion

To delete your account and all associated data, email **idclark34@gmail.com** with the subject "Delete my Kleios account" from the email tied to your account. We'll confirm deletion within 7 days. Account deletion permanently removes:

- Your profile and authentication record
- All photos you've uploaded
- Your submission history and streaks
- Your friend graph entries (your friends' graphs lose your row but their data is unaffected)

Guest accounts that haven't been upgraded will be auto-deleted after a period of inactivity (timeline pending — no shorter than 90 days).

## Children

Kleios is not directed to children under 13. We do not knowingly collect data from children under 13. If you believe a child has signed up, email idclark34@gmail.com.

## Changes to this policy

If this policy changes meaningfully, the "Last updated" date at the top will change. Material changes will be communicated by email to active accounts.

## Contact

Questions or concerns: **idclark34@gmail.com**
