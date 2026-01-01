import { createConfig } from '@zos-apps/config/tsup';

// Settings uses @z-os/core and @z-os/ui which are in z-os4 repo
// Disable DTS to avoid type resolution issues
export default createConfig({
  dts: false,
});
