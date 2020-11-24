# Vue test utils bug
Eager emit does not registered.

Vue test utils does not register an emited event if it was called by watch with `immediate: true` option

**vue-jest**: 5.0.0-alpha.6
**@vue/test-utils**: 2.0.0-beta.10
