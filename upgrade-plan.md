## Jones Logistics App: Upgrade & Refactor Plan

### 1. Dependency & Environment Upgrades
- [ ] Upgrade to the latest stable React, React-Bootstrap, React Router, and testing libraries.
- [ ] Upgrade Node.js/engine to match React requirements.
- [ ] Audit/remove deprecated packages in `package.json`.

### 2. Code Refactor & Modernization
- [ ] Convert all class components to functional components with React hooks.
- [ ] Clean up unused/duplicated components (e.g., multiple navs).
- [ ] Organize source files by feature for maintainability.
- [ ] Move inline or global styles to consistent CSS Modules or SCSS.

### 3. Routing, Navigation, and UI
- [ ] Refactor navigation: unify into a single, accessible Nav component.
- [ ] Leverage `react-router-dom` v6+ features (e.g., nested/layout routes).
- [ ] Audit Bootstrap class usage for v5 best practices.
- [ ] Ensure mobile/tablet responsiveness across all pages/components.

### 4. Accessibility
- [ ] Add/update accessibility features: aria-labels, roles, alt text, keyboard navigation support.

### 5. Testing Framework & Coverage
- [ ] Add/upgrade to React Testing Library and Jest.
- [ ] Add a setup file for tests (`src/setupTests.js`) with common configs if needed.
- [ ] Write or refactor unit/integration tests for all major components:
    - [ ] About ("Jones Logistics" heading is rendered)
    - [ ] Contact (Chad and Hayden visible, valid mail/phone links)
    - [ ] Navigation/nav links
    - [ ] Home/landing renders projects, about text
- [ ] Ensure tests cover main interactivity (expand/collapse, nav route, footer links).
- [ ] Integrate tests into CI (see below).

### 6. CI/CD Improvements
- [ ] Migrate Travis CI jobs to GitHub Actions workflows for build/test/deploy.
- [ ] Add pre-push/PR checks for linting (eslint), formatting (prettier), and all tests.

### 7. Documentation
- [ ] Update README with new features, test instructions, and deployment steps.
- [ ] Document any breaking changes or new conventions introduced.

---

## Example Test Code (Jest + React Testing Library)

**Install requirements if needed:**
```sh
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

**src/components/__tests__/About2.test.js**
```js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from '../About2';

test('renders company heading and experience details', () => {
  render(<About />);
  expect(screen.getByText(/Jones Logistics/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', {name: /experience/i})).toBeInTheDocument();
  // test the expand button opens content
  const btn = screen.getAllByRole('button', {name: /view details/i})[0];
  fireEvent.click(btn);
  expect(screen.getByText(/combined experience in working freight/i)).toBeInTheDocument();
});
```

**src/components/__tests__/Contact.test.js**
```js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

test('renders contact names and emails', () => {
  render(<Contact />);
  expect(screen.getByText(/Chad Hubble/i)).toBeInTheDocument();
  expect(screen.getByText(/Hayden Bellamy/i)).toBeInTheDocument();
  expect(screen.getByRole('link', {name: /chubble@priority1inc.net/i})).toHaveAttribute('href',expect.stringContaining('mailto:'));
});
```

---

_Recommendation: Begin the upgrade with a new branch, and migrate component-by-component, running and expanding tests at each stage._
