# Product Catalog

Product catalog management.

## Table of Contents

- [Product Catalog](#product-catalog)
  - [Table of Contents](#table-of-contents)
  - [Folder Structure](#folder-structure)
  - [Components](#components)
    - [Constants](#constants)
    - [Hooks](#hooks)
    - [Models](#models)
    - [Services](#services)

## Folder Structure

The folder structure of the project is as follows:

```
src/
|-- components/ # Contains React components
|-- constants/ # Contains constants or configuration files
|-- hooks/ # Contains custom React hooks
|-- models/ # Contains data models or interfaces
|-- services/ # Contains services for interacting with external APIs
```

## Components

This folder contains all React components used in the application. Each component should be placed in its own directory along with its related files (e.g., styles, tests).

### Constants

Constants or configuration files used in the application can be stored here. These files can contain values such as API endpoints, configuration settings, or environment variables.

### Hooks

Custom React hooks can be defined in this folder. Hooks are reusable functions that allow you to extract and reuse stateful logic in your components.

### Models

Data models or interfaces used throughout the application can be defined here. These models help ensure type safety and consistency across different parts of your application.

### Services

This folder contains services responsible for interacting with external APIs or handling other data-related tasks. These services abstract away the details of API calls and data fetching, making them easier to manage and test.
