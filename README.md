# @structa/ui-vue

**Structa UI for Vue 3 — Professional components with Composition API**

A Vue 3 component library built on the Structa UI design system. TypeScript-first, tree-shakeable, and ready for production.

---

## Install

```bash
npm install @structa/ui-vue @structa/ui
```

---

## Setup

### 1. Import the CSS

In your `main.ts`, import the Structa UI stylesheet:

```ts
import { createApp } from 'vue';
import App from './App.vue';
import '@structa/ui/css';

createApp(App).mount('#app');
```

### 2. Set a theme

Add a `data-theme` attribute to your root element to activate a theme:

```html
<body data-theme="light">
  <div id="app"></div>
</body>
```

Available themes: `light`, `dark`, `forest`, `ocean`, `professional`, `corporate`

---

## Quick Start

```vue
<script setup lang="ts">
import { Button, Modal, Card } from '@structa/ui-vue';
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <Card>
    <Button variant="primary" @click="open = true">Open Modal</Button>

    <Modal :open="open" title="Hello Structa" @close="open = false">
      <p>This is a Structa UI modal running in Vue 3.</p>
      <template #footer>
        <Button variant="secondary" @click="open = false">Close</Button>
      </template>
    </Modal>
  </Card>
</template>
```

---

## Components

### Core
| Component | Description |
|-----------|-------------|
| `Accordion` | Collapsible content sections |
| `Alert` | Status and feedback messages |
| `Avatar` | User profile images and initials |
| `Badge` | Status indicators and counts |
| `Breadcrumb` + `BreadcrumbItem` | Navigation breadcrumbs |
| `Button` | Primary interactive element |
| `Card` | Content container |
| `Chip` | Tags and filter chips |
| `Drawer` | Slide-in side panel |
| `Dropdown` | Context menus and select menus |
| `Modal` | Dialog overlay |
| `Navbar` | Top navigation bar |
| `Pagination` | Page navigation |
| `Paper` | Elevated surface |
| `Progress` | Linear progress indicator |
| `Skeleton` | Loading placeholders |
| `Sidenav` | Sidebar navigation |
| `Spinner` | Loading spinner |
| `Stat` | Metric/KPI display |
| `Stepper` | Multi-step progress |
| `Switch` | Toggle control |
| `Table` | Data tables |
| `Tabs` | Tabbed navigation |
| `Timeline` + `TimelineItem` | Event timelines |
| `Toast` | Transient notifications |
| `Tooltip` | Contextual hints |

### Inputs
| Component | Description |
|-----------|-------------|
| `TextField` | Text input with label and validation |

### Data Display
| Component | Description |
|-----------|-------------|
| `Image` | Responsive image with lazy loading |
| `EmptyState` | Zero-state UI pattern |

### Utility
| Component | Description |
|-----------|-------------|
| `ThemeToggle` | Light/dark mode toggle |

---

## TypeScript Support

All components ship with full TypeScript types. Shared prop types are re-exported for use in your own components:

```ts
import type { Variant, Size, ColorScheme, Placement, ToastPosition } from '@structa/ui-vue';
```

| Type | Values |
|------|--------|
| `Variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'ghost'` |
| `Size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` |
| `ColorScheme` | `'light' \| 'dark'` |
| `Placement` | `'top' \| 'bottom' \| 'left' \| 'right'` |
| `ToastPosition` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` |

---

## Nuxt Integration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@structa/ui/css'],
  app: {
    head: {
      htmlAttrs: { 'data-theme': 'light' },
    },
  },
});
```

Then use components directly — Nuxt auto-imports them if you register the library as a plugin:

```ts
// plugins/structa.client.ts
import { defineNuxtPlugin } from '#app';
import * as StructaVue from '@structa/ui-vue';

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(StructaVue).forEach(([name, component]) => {
    if (typeof component === 'object' && 'setup' in component) {
      nuxtApp.vueApp.component(name, component);
    }
  });
});
```

---

## Links

- **Website:** [structa.io](https://structa.io)
- **GitHub:** [AravindS-Wick/structa-ui](https://github.com/AravindS-Wick/structa-ui)
- **npm:** [@structa/ui-vue](https://www.npmjs.com/package/@structa/ui-vue)

---

## License

MIT
