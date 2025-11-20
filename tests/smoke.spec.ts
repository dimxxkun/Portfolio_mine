import { test, expect } from "@playwright/test";

test("home page renders hero and contact form", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Abdulfatai" })).toBeVisible();
    await page.getByRole("link", { name: /let/i }).click();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
});

test("language switcher toggles subtitle", async ({ page }) => {
    await page.goto("/");
    const subtitle = page.locator("text=Transforming geospatial data");
    await expect(subtitle).toBeVisible();
    await page.getByRole("button", { name: "FR" }).click();
    await expect(page.locator("text=Transformer les données")).toBeVisible();
});

test("case studies page lists entries", async ({ page }) => {
    await page.goto("/case-studies");
    await expect(page.getByRole("heading", { name: /Case Studies/i })).toBeVisible();
    await page.getByRole("link", { name: /IBEDC Utility Network Modernization/i }).click();
    await expect(page.getByRole("heading", { name: /IBEDC Utility Network Modernization/i })).toBeVisible();
});

