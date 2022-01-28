# JSII Go memory / runtime performance profiling

This repo is a clone of https://github.com/hashicorp/cdktf-provider-aws modified to be able to profile it to debug JSII Go memory usage.

## Setup
```
# after cloning this repo
yarn install
```

## Reproduction
To experience the heavy memory usage, refer to the following commands as starting points.

### Run with `--inspect` flag and profile using e.g. Google Chrome
```
node --max-old-space-size=10000 --inspect ./node_modules/jsii-pacmak/bin/jsii-pacmak.js -v --target go
```

### Creating memory snapshots
**Note:** These did fail for me by either not producing a snapshot (the first two commands) or by running into out of memory for the last one (even when giving 20GB of memory).

Requires at least Node.js `v14.18.0` or `v15.1.0` ([docs](https://nodejs.org/api/cli.html#--heapsnapshot-near-heap-limitmax_count))

```
node --max-old-space-size=500 --heapsnapshot-near-heap-limit=3 ./node_modules/jsii-pacmak/bin/jsii-pacmak.js -v --target go
node --max-old-space-size=6000 --heapsnapshot-near-heap-limit=3 ./node_modules/jsii-pacmak/bin/jsii-pacmak.js -v --target go
node --max-old-space-size=10000 --heap-prof ./node_modules/jsii-pacmak/bin/jsii-pacmak.js -v --target go
```