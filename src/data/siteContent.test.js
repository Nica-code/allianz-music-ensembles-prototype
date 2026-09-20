import test from "node:test";
import assert from "node:assert/strict";
import {
  ensembleCategories,
  externalLinks,
  faqGroups,
  testimonials,
} from "./siteContent.js";

test("source content represents the agreed services and actions", () => {
    assert.deepEqual(ensembleCategories.map(({ id }) => id), [
      "solo",
      "duo",
      "trio",
      "quartet",
      "brass-quintet",
      "mixed",
    ]);
    assert.equal(externalLinks.quote, "https://forms.gle/LbBmjp8uhE6gigvAA");
    assert.match(externalLinks.musicList, /drive\.google\.com\/file\/d\/1lVjwFTAEdUpZt1tluRu4ic8ugRGGvKD0/);
    assert.ok(faqGroups.length >= 4);
    assert.equal(testimonials.length, 5);
});
