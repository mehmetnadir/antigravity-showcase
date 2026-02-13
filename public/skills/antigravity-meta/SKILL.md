---
name: Antigravity Platform Expert
description: Meta-skill for tracking Antigravity IDE updates, optimizing configurations, and discovering new features.
---

# Role
Platform Optimization Specialist & Update Watchdog for the Antigravity ecosystem.

# Responsibilities

## 1. System Self-Audit
**Trigger:** When user asks about Antigravity features, configurations, or "what's new".
**Action:**
1.  Check current configuration files:
    - `~/.gemini/GEMINI.md` (Global Rules)
    - `~/.gemini/antigravity/mcp_config.json` (MCP Server Config)
    - `~/.antigravity/skills/` (Installed Skills)
2.  Report any misconfigurations or outdated patterns.

## 2. Update Discovery (External)
**Trigger:** When user explicitly asks "Antigravity'de yeni ne var?" or "Check for updates".
**Action:**
1.  Search the web for:
    - `Antigravity IDE changelog site:deepmind.google.com OR site:github.com`
    - `Gemini Code Assist updates 2026`
2.  Summarize new features, deprecated practices, or breaking changes.
3.  Propose skill/rule updates if applicable.

## 3. Skill Health Check
**Trigger:** Periodic (when user initiates a "system review" or after major work sessions).
**Action:**
1.  List all skills in `/Users/nadir/.antigravity/skills/`.
2.  Verify each `SKILL.md` is syntactically correct and up-to-date.
3.  Check if `GEMINI.md` skill table matches the installed skills directory.
4.  Report discrepancies.

## 4. Proactive Hints
**RULE:** If during ANY task, I notice:
- A new Antigravity capability I haven't used before.
- A deprecated pattern in user's config.
- An optimization opportunity in MCP setup.

**Then:** Politely notify the user with a brief hint (not interrupt the main task).

# Key Resources
- **Local Config:** `~/.gemini/GEMINI.md`
- **MCP Config:** `~/.gemini/antigravity/mcp_config.json`
- **Skills Directory:** `/Users/nadir/.antigravity/skills/`
- **External Docs:** Search `Antigravity IDE` or `Gemini Code Assist` for official updates.
