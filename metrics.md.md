# Performance Optimization Metrics — GetMeACOFFEE

Documented before/after results from a database performance pass on the
creator profile lookup and top-supporters queries, verified with
MongoDB's `explain()` and real API timing.

## Summary

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| User lookup time | 27 ms | 5 ms | **81% faster** |
| User docs examined | 10 | 1 | **90% fewer scans** |
| User query stage | COLLSCAN | FETCH (IXSCAN) | No more full collection scan |
| Payment `totalKeysExamined` | 0 | 10 | Compound index now used |
| Payment query stage | SORT (in-memory) | LIMIT + FETCH (IXSCAN) | Indexed sort, no in-memory sort |
| Scale Tested | 21 payments | 5,000+ seeded payments | Verified under load |

## What Changed

1. Added a unique-lookup index on `username`:
```javascript
   Userschema.index({ username: 1 });
```
2. Added compound indexes on `payments` to support the top-supporters query:
```javascript
   PaymentSchema.index({ to_user: 1 });
   PaymentSchema.index({ to_user: 1, done: 1, amount: -1 });
   PaymentSchema.index({ to_user: 1, done: 1, createdAt: -1 });
```
3. Added `.lean()` to `fetchuser` and `fetchpayments` in
   `actions/useractions.js` to skip Mongoose document hydration.

## How It Was Measured

**User lookup query plan** (MongoDB Compass shell):
```javascript
db.users.find({ username: "ayushsareen" }).explain("executionStats")
```

**Top-supporters query plan:**
```javascript
db.payments.find({ to_user: "ayushsareen", done: true })
  .sort({ amount: -1 })
  .limit(10)
  .explain("executionStats")
```

Both were run once before the index/`.lean()` changes and once after,
with 5,000 seeded payment records for the same creator to simulate
scale.
