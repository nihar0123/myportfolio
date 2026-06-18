import test from "node:test"
import assert from "node:assert/strict"
import { getSiteUrl, normalizeSiteUrl } from "../lib/site"
import { getBlogSidebarCategories } from "../lib/blog-data"

test("normalizeSiteUrl trims trailing slashes", () => {
  assert.equal(normalizeSiteUrl("https://example.com/"), "https://example.com")
})

test("getSiteUrl uses the default portfolio domain", () => {
  assert.equal(getSiteUrl(""), "https://eindev.ir")
})

test("blog sidebar counts are derived from data", () => {
  const categories = getBlogSidebarCategories()
  const counts = Object.fromEntries(categories.map((category) => [category.slug, category.count]))

  assert.equal(counts.all, 6)
  assert.equal(counts.ai, 2)
  assert.equal(counts.frontend, 2)
  assert.equal(counts.systems, 2)
  assert.equal(counts.design, 0)
})