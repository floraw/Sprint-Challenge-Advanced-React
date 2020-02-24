- [ ] Why would you use class component over function components (removing hooks from the question)?
Class components have a lot built into them to be stateful. They have life cycle hooks to give us control over how they work.
- [ ] Name three lifecycle methods and their purposes.
Mounting - the component getes constructed and rendered to the page
Updating - something in state has changed, components might need to update based on this change, they're rerendered from the virtual DOM to the actual DOM
Unmounting - a component is being deleted from the DOM
- [ ] What is the purpose of a custom hook?
Custom hooks are a more DRY way to apply stateful logic.
- [ ] Why is it important to test our apps?
It's cheaper to write automated tests than to hire a large QA team for end-to-end testing. Unit and integration tests also help us and other devs make sure we haven't broken the code when we add or edit features later on.