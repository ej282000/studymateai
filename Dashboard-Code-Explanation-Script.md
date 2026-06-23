# Dashboard.tsx - Line-by-Line Code Explanation Script

## Lines 1-8: Import Statements

**Line 1:** `import { useState } from "react";`

- Imports the `useState` hook from React library
- `useState` allows us to add state management to functional components
- This is essential for tracking which tab is currently active

**Line 2-8:** Import icons from lucide-react

```typescript
import {
  ArrowLeft, // Back arrow icon
  Upload, // Upload file icon
  BookOpen, // Book/reading icon for study materials
  Calendar, // Calendar icon for scheduling
  Brain, // Brain icon for AI summaries
  CheckCircle, // Checkmark icon for practice/completion
} from "lucide-react";
```

- Lucide-react is a popular icon library
- Each icon is a React component we can use in our JSX
- These icons make the UI more intuitive and visually appealing

## Lines 10-12: TypeScript Interface

**Line 10-12:** Define DashboardProps interface

```typescript
interface DashboardProps {
  onBack: () => void;
}
```

- Defines the props (properties) this component accepts
- `onBack` is a function prop that returns nothing (void)
- This function will be called when user clicks the "Back" button
- TypeScript ensures type safety for component props

## Line 14: Type Definition

**Line 14:** `type Tab = "materials" | "summaries" | "schedule" | "practice";`

- Creates a custom TypeScript type called `Tab`
- Uses union type (|) to restrict values to only these 4 specific strings
- Prevents typos and ensures only valid tab names are used
- Provides autocomplete support in IDEs

## Lines 16-18: Component Declaration & State

**Line 16:** `export default function Dashboard({ onBack }: DashboardProps) {`

- Exports Dashboard as the default export from this file
- Declares a functional component using arrow function syntax
- Destructures `onBack` from props with type annotation
- Component is typed with DashboardProps interface

**Line 17:** `const [activeTab, setActiveTab] = useState<Tab>("materials");`

- Declares state variable `activeTab` with setter function `setActiveTab`
- Uses TypeScript generic `<Tab>` to type the state
- Initial state is set to "materials" (first tab)
- This tracks which tab is currently selected/visible

## Lines 19-24: Tab Configuration Array

**Line 19-24:** Define tabs array

```typescript
const tabs = [
  { id: "materials" as Tab, label: "Study Materials", icon: BookOpen },
  { id: "summaries" as Tab, label: "AI Summaries", icon: Brain },
  { id: "schedule" as Tab, label: "Study Schedule", icon: Calendar },
  { id: "practice" as Tab, label: "Practice", icon: CheckCircle },
];
```

- Creates an array of tab configuration objects
- Each object has:
  - `id`: unique identifier (cast to Tab type)
  - `label`: display text for the tab
  - `icon`: React component for the icon
- Makes it easy to add/remove/modify tabs
- Follows DRY principle (Don't Repeat Yourself)

## Lines 26-28: Main Container Structure

**Line 26:** `return (`

- Starts the JSX return statement
- Everything after this is the component's rendered output

**Line 27:** `<div className="dashboard">`

- Root container div with "dashboard" class
- Main wrapper for entire dashboard component

**Line 28:** `<div className="container">`

- Inner container div for layout purposes
- Likely provides max-width and centering in CSS

## Lines 29-33: Back Button

**Line 29-33:** Back button implementation

```typescript
<button className="btn-back" onClick={onBack}>
  <ArrowLeft size={20} />
  Back to Home
</button>
```

- **Line 29:** Button with "btn-back" class, calls `onBack` when clicked
- **Line 30:** Renders ArrowLeft icon with 20px size
- **Line 31:** Text label for the button
- **Line 32:** Closes the button element
- Allows users to navigate back to the home page

## Lines 35-38: Dashboard Header

**Line 35:** `<div className="dashboard-header">`

- Container div for header section
- Groups heading and description together

**Line 36:** `<h1>Your Learning Dashboard</h1>`

- Main heading (h1) for the dashboard
- Tells users what page they're on

**Line 37:** `<p>Manage your study materials and track your progress</p>`

- Subtitle/description paragraph
- Explains the purpose of the dashboard

**Line 38:** `</div>`

- Closes the dashboard-header div

## Lines 40-50: Tab Navigation

**Line 40:** `<div className="dashboard-tabs">`

- Container for tab buttons
- Likely styled as a horizontal navigation bar

**Line 41:** `{tabs.map((tab) => (`

- Maps over the tabs array to render each tab button
- JavaScript expression in JSX (wrapped in curly braces)
- Creates a button for each tab in the array

**Line 42-44:** Tab button element

```typescript
<button
  key={tab.id}
  className={`tab ${activeTab === tab.id ? "active" : ""}`}
```

- **Line 42:** Button element for each tab
- **Line 43:** `key` prop (required for React lists) set to tab.id
- **Line 44:** Dynamic className using template literal
  - Always has "tab" class
  - Adds "active" class if this tab is currently selected
  - Ternary operator for conditional styling

**Line 45:** `onClick={() => setActiveTab(tab.id)}`

- Click handler that updates activeTab state
- Arrow function calls setActiveTab with current tab's id
- Switches the active tab when clicked

**Line 46-48:** Tab content

```typescript
>
  <tab.icon size={20} />
  {tab.label}
```

- **Line 46:** Closes the opening button tag
- **Line 47:** Renders the tab's icon component with 20px size
- **Line 48:** Displays the tab's label text

**Line 49:** `</button>`

- Closes the tab button element

**Line 50:** `))}`

- Closes the map function
- Closes the dashboard-tabs div

## Lines 52-54: Content Area & Materials Tab

**Line 52:** `<div className="dashboard-content">`

- Container for the main content area
- Where tab-specific content will be displayed

**Line 53:** `{activeTab === "materials" && (`

- Conditional rendering using && operator
- Only renders content if activeTab equals "materials"
- Short-circuit evaluation: if left side is false, right side doesn't render

**Line 54:** `<div className="content-section">`

- Wrapper for materials tab content
- Provides consistent styling for all tab content sections

## Lines 55-62: Upload Area

**Line 55:** `<div className="upload-area">`

- Container for file upload section
- Visually distinct area for uploading files

**Line 56:** `<Upload size={48} />`

- Large Upload icon (48px)
- Visual cue for upload functionality

**Line 57:** `<h3>Upload Study Materials</h3>`

- Heading for upload section
- Tells users what this area is for

**Line 58:** `<p>Drag and drop your notes, PDFs, or documents here</p>`

- Instructions for users
- Describes supported upload methods

**Line 59:** `<button className="btn-primary">Choose Files</button>`

- Primary action button for file selection
- Alternative to drag-and-drop

**Line 60:** `</div>`

- Closes upload-area div

## Lines 61-69: Materials List

**Line 61:** `<div className="materials-list">`

- Container for displaying uploaded materials

**Line 62:** `<h3>Recent Materials</h3>`

- Heading for materials list section

**Line 63:** `<div className="empty-state">`

- Container for empty state message
- Shown when no materials exist yet

**Line 64-67:** Empty state message

```typescript
<p>
  No materials uploaded yet. Start by uploading your first
  document!
</p>
```

- Paragraph with helpful message
- Encourages user to take action
- Guides new users

**Line 68:** `</div>` - Closes empty-state div
**Line 69:** `</div>` - Closes materials-list div

## Lines 70-71: Close Materials Section

**Line 70:** `</div>`

- Closes content-section for materials tab

**Line 71:** `)}`

- Closes the materials tab conditional block
- Closes the opening parenthesis from line 53

## Lines 73-91: Summaries Tab

**Line 73:** `{activeTab === "summaries" && (`

- Conditional rendering for summaries tab
- Only shows when summaries tab is active

**Line 74-81:** Summary Generator Section

```typescript
<div className="content-section">
  <div className="summary-generator">
    <h3>Generate AI Summary</h3>
    <p>Select a document to generate an intelligent summary</p>
    <button className="btn-primary">Generate Summary</button>
  </div>
```

- Container for AI summary generation feature
- Heading, description, and action button
- Allows users to create summaries from their materials

**Line 82-90:** Summaries List Section

```typescript
<div className="summaries-list">
  <h3>Saved Summaries</h3>
  <div className="empty-state">
    <p>No summaries generated yet. Upload materials first!</p>
  </div>
</div>
```

- Displays previously generated summaries
- Shows empty state with guidance message
- Tells users they need materials first

**Line 91:** `)}`

- Closes summaries tab conditional block

## Lines 93-117: Schedule Tab

**Line 93:** `{activeTab === "schedule" && (`

- Conditional rendering for schedule tab

**Line 94-96:** Schedule Builder Container

```typescript
<div className="content-section">
  <div className="schedule-builder">
    <h3>Create Your Study Schedule</h3>
```

- Starts schedule creation section
- Heading tells user what they can do here

**Line 97:** `<div className="schedule-form">`

- Container for form inputs
- Groups related form fields together

**Line 98-101:** Exam Date Input

```typescript
<div className="form-group">
  <label>Exam Date</label>
  <input type="date" className="input" />
</div>
```

- **Line 98:** Form group wrapper for styling
- **Line 99:** Label for the input field
- **Line 100:** Date input field with "input" class
- **Line 101:** Closes form-group
- Allows user to select their exam date

**Line 102-107:** Study Hours Input

```typescript
<div className="form-group">
  <label>Study Hours Per Day</label>
  <input
    type="number"
    className="input"
    placeholder="2-8 hours"
  />
</div>
```

- Number input for daily study hours
- Placeholder provides suggested range
- Helps schedule realistic study sessions

**Line 108-114:** Subjects Input

```typescript
<div className="form-group">
  <label>Subjects to Cover</label>
  <input
    type="text"
    className="input"
    placeholder="Math, Physics, Chemistry..."
  />
</div>
```

- Text input for subject list
- Placeholder shows example format
- User can list all subjects to study

**Line 115:** `<button className="btn-primary">Generate Schedule</button>`

- Submit button to create schedule
- Primary action button for this form

**Line 116-118:** Closing tags

- Closes schedule-form, schedule-builder, and content-section divs

**Line 119:** `)}`

- Closes schedule tab conditional block

## Lines 121-147: Practice Tab

**Line 121:** `{activeTab === "practice" && (`

- Conditional rendering for practice tab

**Line 122-124:** Practice Area Container

```typescript
<div className="content-section">
  <div className="practice-area">
    <h3>Practice & Quizzes</h3>
```

- Container for practice/quiz features
- Heading describes this section

**Line 125:** `<p>Test your knowledge with AI-generated questions</p>`

- Description of practice feature
- Mentions AI-generated content

**Line 126:** `<div className="practice-stats">`

- Container for statistics display
- Groups stat cards together

**Line 127-130:** Quizzes Taken Stat

```typescript
<div className="stat-card">
  <h4>0</h4>
  <p>Quizzes Taken</p>
</div>
```

- Card showing number of quizzes completed
- Currently hardcoded to 0 (placeholder)
- h4 for the number, p for label

**Line 131-134:** Average Score Stat

```typescript
<div className="stat-card">
  <h4>0%</h4>
  <p>Average Score</p>
</div>
```

- Card showing user's average quiz score
- Percentage format
- Currently placeholder data

**Line 135-138:** Topics Mastered Stat

```typescript
<div className="stat-card">
  <h4>0</h4>
  <p>Topics Mastered</p>
</div>
```

- Card showing mastered topic count
- Gamification element to encourage learning
- Placeholder data (0)

**Line 139:** `</div>`

- Closes practice-stats container

**Line 140:** `<button className="btn-primary">Start Practice Quiz</button>`

- Primary action button to begin quiz
- Main call-to-action for practice tab

**Line 141-143:** Closing tags

- Closes practice-area and content-section divs

**Line 144:** `)}`

- Closes practice tab conditional block

## Lines 145-149: Component Cleanup

**Line 145:** `</div>`

- Closes dashboard-content div

**Line 146:** `</div>`

- Closes container div

**Line 147:** `</div>`

- Closes root dashboard div

**Line 148:** `);`

- Closes the return statement

**Line 149:** `}`

- Closes the Dashboard function component

---

## Summary

This Dashboard component is a feature-rich learning management interface with:

- **4 main tabs**: Materials, Summaries, Schedule, and Practice
- **State management**: Uses useState to track active tab
- **Conditional rendering**: Shows different content based on active tab
- **Placeholder UI**: Empty states guide users on what to do
- **Responsive design**: Uses CSS classes for styling
- **TypeScript**: Provides type safety throughout

The component is currently UI-only (no backend logic yet) and serves as a template for a full-featured learning platform.
