import Button from './atoms/Button.vue';

// Atoms
export const avatar = ['c-avatar', () => import('./atoms/Avatar.vue')];
export const button = ['c-button', Button];
export const spinner = ['c-spinner', () => import('./atoms/Spinner.vue')];
export const tag = ['c-tag', () => import('./atoms/Tag.vue')];
export const bubble = ['c-bubble', () => import('./atoms/Bubble.vue')];
export const thumb = ['c-thumb', () => import('./atoms/Thumb.vue')];
export const image = ['c-image', () => import('./atoms/Image.vue')];

// Form
export const checkbox = ['c-checkbox', () => import('./form/Checkbox.vue')];
export const input = ['c-input', () => import('./form/Input.vue')];
export const fileinput = ['c-fileinput', () => import('./form/FileInput.vue')];
export const radio = ['c-radio', () => import('./form/Radio.vue')];
export const textarea = ['c-textarea', () => import('./form/Textarea.vue')];
export const toggle = ['c-toggle', () => import('./form/Toggle.vue')];
export const filter = ['c-filter', () => import('./form/Filter.vue')];
export const select = ['c-select', () => import('./form/Select.vue')];
export const selectMulti = ['c-select-multi', () => import('./form/SelectMulti.vue')];

// Layout
export const divider = ['c-divider', () => import('./layout/Divider.vue')];
export const card = ['c-card', () => import('./layout/Card.vue')];
export const modal = ['c-modal', () => import('./layout/Modal.vue')];
export const tabs = ['c-tabs', () => import('./layout/Tabs.vue')];
export const timeline = ['c-timeline', () => import('./layout/timeline/Timeline.vue')];
export const timelineItem = ['c-timeline-item', () => import('./layout/timeline/TimelineItem.vue')];

// menu
export const dotmenu = ['c-dotmenu', () => import('./menu/DotMenu.vue')];

// Typography
