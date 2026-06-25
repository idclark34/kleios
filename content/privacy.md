# Kleios Privacy Policy

**Last updated:** June 24, 2026

Kleios is a self-improvement app where you build better daily habits by completing real-life quests that battle a daily "boss," keep streaks, and compete with friends. This document describes what data the app collects, where it's stored, who can see it, and how to get it deleted.

## What we collect

When you create a Kleios account, the app collects:

- **Email address** — used to authenticate you and send login-related messages.
- **Display name and handle** — names you choose during sign-up. Friends use your handle to invite you.
- **Photos you upload** — when you complete a habit or quest, your photo is uploaded so the AI can verify it was completed. Photos are linked to your account.
- **Habits and routines you opt into** — the self-improvement areas and tasks you've chosen (cooking, cleaning, diet, exercise, reading, and similar).
- **Activity history** — which quests and habits you've completed or missed, when, and the AI's verdict.
- **Friend graph** — invitations you send and accept, and the resulting accepted-friend relationships.
- **Timezone** — auto-detected from your device, used to schedule daily quests in your local day.

If you sign in as a guest, the app skips email/handle collection — you get an anonymous account that lives only on your device until you choose to upgrade.

### Hashed contacts (optional)

If you tap "Find from contacts" inside Kleios, the app reads your iOS Contacts and sends irreversible SHA-256 hashes of your contacts' phone numbers (and the names you have saved for them) to our servers. We use these to tell you which of your contacts already use Kleios. We never receive the raw phone numbers, never share these hashes with anyone, and delete them automatically when you delete your Kleios account.

### Product analytics

Kleios uses [PostHog](https://posthog.com) to understand how the app is used — which onboarding steps people complete, how often quests are submitted, where users get stuck.

We send:

- Event names (e.g. `onboarding_step_completed`, `quest_submitted`)
- Minimal properties: sign-up provider, sign-up date, and booleans like whether you've set a handle or avatar
- Your Kleios user ID, so events from the same person can be grouped

We do **not** send your email, phone number, display name, photos, contacts, contact hashes, or any submission content to PostHog.

You can turn this off in Settings, under "Help improve Kleios." When you delete your Kleios account, the PostHog data tied to your user ID is also deleted.

## What we don't collect

- No tracking across other apps or websites.
- No advertising identifiers.
- No location beyond the timezone listed above.
- No raw contact data — only hashed phone numbers and the names you've saved, and only if you opt in via Find from contacts.

## App-blocking (Screen Time)

If you start a focus session, Kleios can shield the apps you choose for the duration of that session, using Apple's Family Controls / Screen Time framework. The list of apps you pick is managed on-device by iOS and is never transmitted to or stored on our servers — Kleios only asks iOS to apply and remove the shield.

## Where data is stored

- All app data (account info, photos, activity, friend relationships) is stored in [Supabase](https://supabase.com), a managed database and storage provider, hosted in their U.S. region.
- Photos are processed by [Anthropic](https://www.anthropic.com)'s Claude API for verification. Anthropic does not retain photos after processing per their API data handling policy.
- Authentication tokens are stored on your device using iOS's secure keychain.

## Who can see your data

- **You** — full access to everything tied to your account via the Profile and Home screens.
- **Friends you've accepted** — can see your handle, display name, opted-in habits, streaks, and the *completed* habit submissions you share (including the photos). Friends cannot see missed or pending submissions, your email, or any other data.
- **No one else** — Kleios staff (currently a single developer) does not view individual account data outside of debugging an issue you've reported.

## Data deletion

To delete your account and all associated data, open the app and go to **Profile → Delete account** (or **Profile → Exit guest mode** for guest accounts), then confirm. Deletion is immediate and permanent. It removes:

- Your profile and authentication record
- All photos you've uploaded
- Your activity history and streaks
- Your friend graph entries (your friends' graphs lose your row but their data is unaffected)
- Your PostHog analytics record

Guest accounts that haven't been upgraded will be auto-deleted after a period of inactivity (no shorter than 90 days).

## Children

Kleios is not directed to children under 13. We do not knowingly collect data from children under 13. If you believe a child has signed up, email idclark34@gmail.com.

## Changes to this policy

If this policy changes meaningfully, the "Last updated" date at the top will change. Material changes will be communicated by email to active accounts.

## Contact

Questions or concerns: **idclark34@gmail.com**
