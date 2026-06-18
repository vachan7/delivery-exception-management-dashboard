# Delivery Exception Management Dashboard

## Overview

The **Delivery Exception Management Dashboard** is a web-based application designed to help logistics teams record, track, and resolve delivery-related issues efficiently. The dashboard provides a centralized interface for operations managers to monitor delivery exceptions and manage issue resolution workflows.

---

## Features

### Delivery Exception Reporting

* Add new delivery exceptions
* Validate required fields before submission
* Categorize issues by type
* Assign priority levels (Low, Medium, High)

### Dynamic Dashboard

* Display all reported exceptions in a table
* Update records instantly without page refresh
* Track issue status in real time

### Issue Management

* Mark issues as **Resolved**
* Disable resolve action after completion
* Delete records with confirmation prompt

### Filtering System

* Filter records by Issue Type
* Filter records by Status
* Show and hide rows dynamically using DOM manipulation

### Dashboard Analytics

* Open Issues Counter
* Resolved Issues Counter
* High Priority Issue Highlighting

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Visual Studio Code

---

## Project Structure

```text
delivery-exception-management-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How It Works

1. User enters delivery issue details through the form.
2. JavaScript validates all required inputs.
3. Issue information is stored in an array.
4. A new table row is generated dynamically.
5. Users can:

   * Resolve issues
   * Delete issues
   * Filter records
6. Dashboard statistics update automatically.

---

## Technical Concepts Demonstrated

* DOM Manipulation
* Event Handling
* Event Delegation
* Form Validation
* Dynamic Table Rendering
* JavaScript Arrays and Objects
* Conditional Styling
* Responsive UI Design

---

## Future Enhancements

* Local Storage Support
* Search Functionality
* Data Export (CSV)
* Backend Integration
* Authentication System
* Dark Mode

---
