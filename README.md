# Reaction Buttons

A lightweight, accessible Like/Dislike toggle component built with React and Lucide React icons. This component manages mutually exclusive states, ensuring a user can only select one reaction at a time.

## Features

- Mutually Exclusive Logic: Clicking "Like" while "Dislike" is active automatically deselects the dislike.

- Toggleable States: Clicking an active button deselects it (returns to neutral).

- Derived State Strategy: Uses a single userAction state to calculate counts, preventing "state drift" and reducing re-renders.

- Accessible: Designed with clear visual feedback for active states.

## How It Works

The component operates on a **Single Source of Truth** principle. Instead of managing multiple independent counters, it uses a state-machine approach to ensure the UI remains predictable and bug-free.

### 1. State Mapping

The component tracks a single variable, `userAction`, which can hold one of three specific values:

- `'like'`: The user has selected the like reaction.
- `'dislike'`: The user has selected the dislike reaction.
- `null`: The user has no active selection (neutral state).

### 2. The "Offset" Pattern (Derived State)

To prevent "state drift" (where UI counts get out of sync with backend data), the component calculates the displayed numbers during the render phase rather than updating them manually.

| State (`userAction`) | Like Display      | Dislike Display   |
| :------------------- | :---------------- | :---------------- |
| `null`               | Base (50)         | Base (27)         |
| `'like'`             | **51** (Base + 1) | 27 (Base)         |
| `'dislike'`          | 50 (Base)         | **28** (Base + 1) |

### 3. Handling Interactions

The `handleReaction` function handles all transitions with a single comparison:

- **Toggle Off:** If the user clicks "Like" while `userAction` is already `'like'`, the state resets to `null`.
- **Switching:** If the user clicks "Dislike" while `userAction` is `'like'`, the state simply updates to `'dislike'`. Because the counts are derived from this single source, the "Like" count automatically reverts to its base value.

## Installation & Usage

You will need **Lucide React** for the UI icons. Install it via your preferred package manager:

```bash
npm install lucide-react
# or
yarn add lucide-react
```

1. **Copy the component** into your project (e.g., `src/components/ReactionButtons.jsx`).
2. **Import and use it** in your main application:

```jsx
import ReactionButtons from "./ReactionButtons";

function App() {
  return (
    <div className="container">
      <h1>Post Feedback</h1>
      <ReactionButtons />
    </div>
  );
}
```
