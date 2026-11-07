const PHASES = [
  {
    title:'Période de SAS (Immersion)', focus:'Build your learning habits and programming foundations.', duration:'4–6 weeks',
    overview:'An immersion phase for learning how to learn, collaborate, and become comfortable with the tools and problem-solving habits used in a development programme.',
    objectives:['Break a small problem into clear steps','Practice core programming ideas with pseudocode and code','Use the terminal and Git for a simple collaborative workflow'], prerequisites:['Curiosity and willingness to practice'],
    activities:['Pair-program a short algorithm','Keep a daily learning log','Create a small repository and make a sequence of clear commits'],
    project:'A small command-line or browser program with a README and a short reflection.', criteria:'Explain the program flow, make a small change independently, and share work through a repository.',
    modules:[
      {name:'Programming Fundamentals',duration:'3–4 weeks',description:'A prerequisite-ordered path from problem framing to reusable program building blocks.',topics:['Introduction to programming','Problem-solving','Algorithms','Pseudocode','Variables','Data types','Constants','Operators','Expressions','Conditions','If / else','Switch statements','Loops','For loops','While loops','Functions','Parameters and arguments','Return values','Scope','Arrays','Objects','Basic debugging']},
      {name:'Essential Developer Skills',duration:'1–2 weeks',description:'Computer and collaboration practices for beginning development work.',topics:['Computer fundamentals','Operating systems','File systems','Terminal basics','Command-line navigation','Basic project organization','Git fundamentals','Repository creation','Commits','Branches','GitHub','Collaboration']}
    ]
  },
  {
    title:'Concevoir et maquetter une application web',focus:'Understand a user problem, then communicate a design clearly.',duration:'4–6 weeks',
    overview:'Explore the design and wireframing phase through user needs, information structure, visual communication, and how a browser-based product fits together.',
    objectives:['Describe a user need and the path through a product','Create wireframes and a clickable prototype','Explain a browser request using basic web vocabulary'],prerequisites:['SAS immersion or equivalent collaborative project experience'],
    activities:['Interview a peer about a simple task','Sketch a task flow before opening a design tool','Review a prototype with another learner'],
    project:'A short product brief, user flow, wireframes, and clickable prototype with a handoff note.',criteria:'Show how the design responds to a user need and explain key layout decisions.',
    modules:[
      {name:'UI/UX Fundamentals',duration:'2 weeks',description:'Research, information structure, and visual communication before implementation.',topics:['UI versus UX','User research','User personas','User journeys','Information architecture','Wireframes','Prototypes','Visual hierarchy','Typography','Color theory','Spacing','Design systems']},
      {name:'Figma',duration:'1–2 weeks',description:'Build a reusable design file and hand it to a developer with context.',topics:['Frames','Components','Auto Layout','Constraints','Variants','Design tokens','Interactive prototypes','Developer handoff']},
      {name:'Web Foundations',duration:'1–2 weeks',description:'Understand the systems involved when a browser requests and renders a site.',topics:['How the web works','Client-server architecture','DNS','HTTP','HTTPS','Browser rendering','Hosting','Domains']}
    ]
  },
  {
    title:'Développer une interface utilisateur dynamique et adaptable',focus:'Build accessible interfaces that respond to people and devices.',duration:'8–12 weeks',
    overview:'Learn the browser platform in prerequisite order: document structure, visual layout, then JavaScript behavior and networked interfaces.',
    objectives:['Structure content with semantic HTML','Create responsive layouts and accessible controls','Use JavaScript to update the DOM and handle asynchronous data'],prerequisites:['Web foundations and basic terminal/Git comfort'],
    activities:['Rebuild a responsive page from a wireframe','Add a validated form and keyboard interactions','Fetch public data with visible loading and error states'],
    project:'A responsive, accessible multi-page interface with form validation and one API-backed view.',criteria:'Demonstrate semantic structure, mobile layout, keyboard access, and explain how one user action changes the UI.',
    modules:[
      {name:'HTML5',duration:'2 weeks',description:'Start with document structure and semantic elements before forms and accessibility details.',topics:['HTML document structure','Headings','Paragraphs','Lists','Links','Images','Forms','Input elements','Buttons','Tables','Semantic HTML','Header','Navigation','Main','Article','Section','Aside','Footer','Accessibility attributes','ARIA fundamentals']},
      {name:'CSS3',duration:'2–3 weeks',description:'Move from the cascade and box model to layout, responsive behavior, and motion.',topics:['Selectors','Specificity','Inheritance','Box model','Display','Position','Flexbox','CSS Grid','Media queries','Responsive design','Mobile-first methodology','Custom properties','Pseudo-classes','Pseudo-elements','Transitions','Animations','CSS architecture']},
      {name:'JavaScript',duration:'4–6 weeks',description:'A prerequisite-ordered browser JavaScript path, from values and functions to the event loop and storage.',topics:['JavaScript fundamentals','Variables','Data types','Operators','Conditions','Loops','Functions','Arrow functions','Scope and closures','Higher-order functions','Arrays','Objects','Destructuring','Spread and rest operators','Array methods','Map','Filter','Reduce','DOM','DOM manipulation','DOM traversal','Events','Event bubbling','Event capturing','Event delegation','Forms and validation','Date objects','Timers','Error handling','JSON','Callbacks','Promises','Promise chaining','Async/await','Fetch API','APIs','Event loop','Microtasks','Macrotasks','ES modules','Local storage','Session storage']},
      {name:'Modern Frontend Development (Supplementary)',duration:'Optional extension',description:'Additional tools commonly used in modern front-end projects; these are supplementary unless confirmed by the official curriculum.',supplementary:true,topics:['TypeScript','Static typing','Interfaces','Types','Generics','React','Components','Props','State','Hooks','Context','Routing','Component lifecycle concepts','API integration','State management','Reusable components']},
      {name:'Accessibility, Testing and Delivery (Supplementary)',duration:'Ongoing practice',description:'Cross-cutting practices for inclusive, testable, and deployable browser experiences.',supplementary:true,topics:['Keyboard accessibility','Screen reader semantics','Color contrast','Reduced motion','Unit testing','Integration testing','End-to-end testing','Browser developer tools','Web performance basics','Deployment fundamentals','Environment configuration','Security basics']}
    ]
  },
  {
    title:"Développer la base de données d'une application",focus:'Model data so an application can store and retrieve it reliably.',duration:'4–6 weeks',
    overview:'Design relational structures, express queries in SQL, and reason about integrity and safe changes to stored data.',
    objectives:['Translate requirements into a relational model','Write queries that retrieve and summarize related records','Use constraints and transactions to protect data integrity'],prerequisites:['Basic programming and familiarity with application data'],
    activities:['Model a small catalogue with an ER diagram','Write and explain joins and aggregate queries','Test a migration on sample data'],
    project:'A normalized database design with an ER diagram, schema, and query notebook.',criteria:'Explain table relationships, key constraints, and query results for a realistic use case.',
    modules:[
      {name:'Database Fundamentals',duration:'1–2 weeks',description:'Understand persistence, relational structure, and translating a domain into entities.',topics:['Database fundamentals','Relational databases','Database design','Entity Relationship Diagrams','Tables','Data types','Primary keys','Foreign keys','Relationships','Constraints']},
      {name:'SQL and Querying',duration:'2–3 weeks',description:'Build queries in a progression from selecting rows to combining and summarizing data.',topics:['SQL statements','SELECT and filtering','Sorting and limiting','INSERT','UPDATE','DELETE','Joins','Aggregation','GROUP BY and HAVING','Subqueries','Indexes','Query plans']},
      {name:'Integrity and Data Quality',duration:'1–2 weeks',description:'Keep a schema understandable and changes safe as the application grows.',topics:['Normalization','Transactions','ACID properties','Migrations','Data validation','Referential integrity','Backup and restore basics']}
    ]
  },
  {
    title:'Développer la partie back-end d’une application web ou web mobile',focus:'Build server-side behavior that validates, protects, and serves data.',duration:'8–12 weeks',
    overview:'Connect routes, business logic, and persistence behind a web interface. The public phase title does not specify a required server language or framework.',
    objectives:['Trace an HTTP request through a server route','Implement CRUD behavior with validation and useful errors','Protect private routes with authentication and authorization'],prerequisites:['JavaScript, web foundations, and relational database fundamentals'],
    activities:['Design a small REST resource before coding','Validate requests on the server','Review an authentication flow and threat model'],
    project:'A documented server application with CRUD endpoints, validation, access checks, and database persistence.',criteria:'Demonstrate a successful and failed request, explain access controls, and document the API.',
    modules:[
      {name:'Server-side Programming with PHP',duration:'3–4 weeks',description:'Core PHP syntax and object-oriented techniques for server-side applications.',topics:['Server-side programming','PHP fundamentals','PHP syntax and types','Functions and arrays','Object-oriented programming','Classes and objects','Encapsulation','Inheritance','Polymorphism','Exceptions']},
      {name:'Web Application Architecture',duration:'2–3 weeks',description:'Organize request handling and application behavior into clear responsibilities.',topics:['HTTP requests and responses','Routing','Controllers','Middleware','MVC','CRUD','REST APIs','Serialization','Validation','Error handling']},
      {name:'Identity and Security',duration:'2–3 weeks',description:'Protect accounts, data, and application boundaries with layered controls.',topics:['Authentication','Authorization','Sessions','Password handling','CSRF','SQL injection','Output encoding','Backend security','Rate limiting','Secrets management']},
      {name:'Laravel (Supplementary)',duration:'Optional extension',description:'A popular PHP framework for routing, validation, persistence, and application structure; supplementary unless verified in the official curriculum.',supplementary:true,topics:['Laravel routing','Request validation','Eloquent models','Migrations and seeders','Policies and gates','Laravel API resources']}
    ]
  },
  {
    title:'Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce',focus:'Shape content and commerce experiences with a CMS or e-commerce tool.',duration:'4–6 weeks',
    overview:'Work with a content or commerce platform to organize information, configure presentation, and support a clear customer journey.',
    objectives:['Explain how content is modeled in a CMS','Customize a theme or template safely','Map a product discovery and checkout journey'],prerequisites:['Responsive HTML/CSS and basic web application concepts'],
    activities:['Define content types and navigation for a small site','Configure a product category and search flow','Review key pages for accessibility and SEO'],
    project:'A small CMS or commerce storefront with a content plan, theme adjustments, and documented user journey.',criteria:'Demonstrate content structure, responsive interface behavior, and a complete sample journey.',
    modules:[
      {name:'CMS Fundamentals',duration:'1–2 weeks',description:'Understand content systems and how editors, templates, and extensions work together.',topics:['CMS fundamentals','Content architecture','Content types','Taxonomies','Templates','Themes','Plugins','CMS customization','Roles and editorial workflow']},
      {name:'Content and Presentation',duration:'1–2 weeks',description:'Organize content, navigation, search, and discoverability.',topics:['Navigation structure','Content modeling','Search','SEO','Metadata','Accessibility in CMS content','Theme configuration']},
      {name:'E-commerce Foundations',duration:'2 weeks',description:'Model a catalogue and the customer steps from product discovery through checkout.',topics:['E-commerce architecture','Product catalogs','Categories','Product management','Product details','Shopping carts','Checkout concepts','Payments and order states','Customer support basics']}
    ]
  },
  {
    title:'Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce',focus:'Build reusable components and keep them reliable over time.',duration:'4–6 weeks',
    overview:'Create configurable, reusable pieces that connect to dynamic CMS or commerce content and can be tested, optimized, and maintained.',
    objectives:['Separate reusable component behavior from page content','Configure and integrate dynamic content safely','Test and optimize the complete experience'],prerequisites:['CMS/e-commerce interface and component fundamentals'],
    activities:['Build a reusable product card or editorial block','Test configurable states and empty data','Review component accessibility and loading performance'],
    project:'A small component library integrated into a CMS or commerce experience, with usage notes and test cases.',criteria:'Show reusable configuration, content integration, responsive behavior, and a maintenance note.',
    modules:[
      {name:'Reusable Component Design',duration:'1–2 weeks',description:'Design component boundaries, variants, and configuration options.',topics:['Reusable components','Component architecture','Component boundaries','Component configuration','Variants and states','Design-system alignment']},
      {name:'Dynamic Content and Integration',duration:'1–2 weeks',description:'Connect reusable presentation to real CMS or catalogue data.',topics:['Dynamic content','Template customization','Data mapping','Integration','Empty and error states','Content fallbacks']},
      {name:'Quality, Performance and Maintenance',duration:'1–2 weeks',description:'Verify components and make changes maintainable.',topics:['Testing','Accessibility checks','Optimization','Performance budgets','Maintenance','Documentation','Versioning and change management']}
    ]
  }
];

const RESOURCE_CATALOG = [
 {title:'MDN Web Docs',url:'https://developer.mozilla.org/',source:'MDN',type:'Official documentation',description:'Web platform reference and learning guides.',language:'English'},
 {title:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/',source:'GeeksforGeeks',type:'Tutorial',description:'Programming and computer science tutorials.',language:'English'},
 {title:'freeCodeCamp Learn',url:'https://www.freecodecamp.org/learn/',source:'freeCodeCamp',type:'Interactive exercise',description:'Free guided lessons and hands-on practice.',language:'English'},
 {title:'W3Schools',url:'https://www.w3schools.com/',source:'W3Schools',type:'Tutorial',description:'Reference material and browser-based exercises.',language:'English'},
 {title:'W3C Standards',url:'https://www.w3.org/standards/',source:'W3C',type:'Official documentation',description:'Standards and guidance for the open web.',language:'English'},
 {title:'React documentation',url:'https://react.dev/',source:'React',type:'Official documentation',description:'Official React learning and reference material.',language:'English'},
 {title:'TypeScript documentation',url:'https://www.typescriptlang.org/docs/',source:'TypeScript',type:'Official documentation',description:'Official TypeScript handbook and reference.',language:'English'},
 {title:'PHP documentation',url:'https://www.php.net/docs.php',source:'PHP',type:'Official documentation',description:'Official PHP manual and language reference.',language:'English'},
 {title:'Git documentation',url:'https://git-scm.com/doc',source:'Git',type:'Official documentation',description:'Official Git book, reference, and tutorials.',language:'English'},
 {title:'Laravel documentation',url:'https://laravel.com/docs',source:'Laravel',type:'Official documentation',description:'Official Laravel guides and API reference.',language:'English'}
];

const TOPIC_RESOURCES={
 'JavaScript fundamentals':{title:'JavaScript Guide',url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',source:'MDN',type:'Official documentation',description:'A structured guide to the JavaScript language.',language:'English'},
 'Variables':{title:'JavaScript variables',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables',source:'MDN',type:'Tutorial',description:'Declaring variables and using them in JavaScript.',language:'English'},
 'Functions':{title:'Functions',url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',source:'MDN',type:'Official documentation',description:'Function declarations, parameters, scope and more.',language:'English'},
 'Arrow functions':{title:'Arrow function expressions',url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',source:'MDN',type:'Official documentation',description:'Syntax and behavior of arrow functions.',language:'English'},
 'Event delegation':{title:'Event bubbling',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling',source:'MDN',type:'Tutorial',description:'How events travel through a document and can be handled by ancestors.',language:'English'},
 'Event bubbling':{title:'Event bubbling',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling',source:'MDN',type:'Tutorial',description:'How events propagate through the DOM tree.',language:'English'},
 'Promises':{title:'Promise',url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',source:'MDN',type:'Official documentation',description:'The Promise object and asynchronous result handling.',language:'English'},
 'Promise chaining':{title:'Promise',url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',source:'MDN',type:'Official documentation',description:'Promise handlers and chaining behavior.',language:'English'},
 'Fetch API':{title:'Using the Fetch API',url:'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',source:'MDN',type:'Tutorial',description:'Make network requests and handle responses with fetch().',language:'English'},
 'Semantic HTML':{title:'HTML',url:'https://developer.mozilla.org/en-US/docs/Web/HTML',source:'MDN',type:'Official documentation',description:'HTML elements, attributes, and document structure.',language:'English'},
 'HTML document structure':{title:'HTML',url:'https://developer.mozilla.org/en-US/docs/Web/HTML',source:'MDN',type:'Official documentation',description:'HTML elements, attributes, and document structure.',language:'English'},
 'ARIA fundamentals':{title:'ARIA in HTML',url:'https://www.w3.org/TR/html-aria/',source:'W3C',type:'Official documentation',description:'How ARIA attributes may be used with HTML elements.',language:'English'},
 'CSS3':{title:'CSS',url:'https://developer.mozilla.org/en-US/docs/Web/CSS',source:'MDN',type:'Official documentation',description:'CSS properties, values, selectors, and guides.',language:'English'},
 'Flexbox':{title:'Basic concepts of flexbox',url:'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox',source:'MDN',type:'Tutorial',description:'The flex formatting context and its main axes.',language:'English'},
 'CSS Grid':{title:'Grid layout',url:'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout',source:'MDN',type:'Tutorial',description:'Two-dimensional layout with CSS Grid.',language:'English'},
 'Accessibility attributes':{title:'Introduction to Web Accessibility',url:'https://www.w3.org/WAI/fundamentals/accessibility-intro/',source:'W3C WAI',type:'Official documentation',description:'Foundations for making web content accessible.',language:'English'},
 'Keyboard accessibility':{title:'Keyboard Compatibility',url:'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html',source:'W3C WAI',type:'Official documentation',description:'Understanding keyboard access requirements.',language:'English'},
 'PHP fundamentals':{title:'PHP Language Reference',url:'https://www.php.net/manual/en/langref.php',source:'PHP',type:'Official documentation',description:'Official syntax, types, functions, and classes reference.',language:'English'},
 'Git fundamentals':{title:'Git documentation',url:'https://git-scm.com/doc',source:'Git',type:'Official documentation',description:'The Pro Git book, reference, and guided tutorials.',language:'English'},
 'React':{title:'React documentation',url:'https://react.dev/',source:'React',type:'Official documentation',description:'Official React learning and API reference.',language:'English'},
 'TypeScript':{title:'TypeScript documentation',url:'https://www.typescriptlang.org/docs/',source:'TypeScript',type:'Official documentation',description:'The TypeScript Handbook and reference.',language:'English'},
 'Laravel routing':{title:'Laravel routing',url:'https://laravel.com/docs/routing',source:'Laravel',type:'Official documentation',description:'Laravel route definitions and request handling.',language:'English'}
};

export const OFFICIAL_PROGRAMME={
 sourceUrl:'https://www.youcode.ma/programme',verifiedDate:'2026-11-07',
 yearOne:'Formation technique tronc commun: the published programme describes first-year training in programming and web development fundamentals.',
 pedagogy:['Active, project-based self-learning','Individual and group work','Practical situations similar to workplace cases, and sometimes real cases','Learners research information and teach one another'],
 boundary:'The public page lists the seven phase titles and broad first-year approach. It does not publish phase-by-phase modules, objectives, prerequisites, durations, assignments, or measurable competencies. Detailed items in the extended track are recommendations, not verified YouCode requirements.',
 phases:PHASES.map((p,index)=>({id:`official-phase-${index+1}`,title:p.title,index,classification:'official-title-only',detail:'Official phase title verified. The public programme does not provide phase-specific module or outcome details.'}))
};

const specialCompetencies = {
 'Event delegation':['Explain event bubbling.','Explain how event delegation works.','Identify when to use event delegation.','Implement event delegation.','Use event.target and closest().','Debug delegated event listeners.','Apply event delegation in a real project.'],
 'Promises':['Explain the pending, fulfilled, and rejected states.','Create a promise-based operation.','Chain work with then and catch.','Handle failures without hiding useful errors.','Choose between a promise chain and async/await.'],
 'Primary keys':['Explain why a primary key uniquely identifies a row.','Choose a stable key for a table.','Add a primary-key constraint.','Recognize and fix duplicate-key errors.','Use keys when relating records.'],
 'Authentication':['Explain how authentication differs from authorization.','Describe a secure sign-in flow.','Protect a route that requires a signed-in user.','Handle sign-out and session expiry.','Recognize common credential-handling risks.']
};

const CONCEPT_NOTES={
 'Variables':{definition:'A variable is a named binding that lets a program refer to a value.',why:'Names let later expressions reuse and update information without repeating the value itself.',prerequisites:['Expressions'],terms:['binding','assignment','scope'],example:'const learner = "Amina";\nlet attempts = 0;\nattempts += 1;',mistakes:['Using a value before it is initialized.','Reassigning a const binding.','Using var without understanding its function scope.'],related:['Data types','Scope and closures']},
 'Data types':{definition:'A data type describes the kind of value and the operations that make sense for it.',why:'Knowing the type helps predict behavior, compare values safely, and choose appropriate operations.',prerequisites:['Variables'],terms:['string','number','boolean','null','undefined','object'],example:'typeof "hello"; // "string"\ntypeof 42;      // "number"',mistakes:['Assuming numeric strings behave exactly like numbers.','Treating null and undefined as the same value.'],related:['Variables','Operators']},
 'Conditions':{definition:'A condition is an expression whose truthiness controls which branch of code runs.',why:'Conditions let a program choose behavior based on current data or user input.',prerequisites:['Operators','Boolean values'],terms:['condition','truthy','falsy','branch'],example:'if (score >= 50) {\n  result = "pass";\n} else {\n  result = "try again";\n}',mistakes:['Using assignment (=) instead of comparison (===).','Forgetting that empty strings, 0, null, and undefined are falsy.'],related:['If / else','Switch statements']},
 'Functions':{definition:'A function is a reusable unit of code that can receive inputs, perform work, and optionally return a value.',why:'Functions name behavior, reduce repetition, and create small units that are easier to test and explain.',prerequisites:['Variables','Expressions'],terms:['declaration','parameter','argument','return value'],example:'function add(a, b) {\n  return a + b;\n}\nadd(2, 3); // 5',mistakes:['Confusing a parameter with the argument passed at a call site.','Expecting a function to return a value when it has no return statement.'],related:['Parameters and arguments','Return values','Scope','Callbacks']},
 'Higher-order functions':{definition:'A higher-order function takes another function as an argument, returns a function, or both.',why:'This pattern supports reusable operations such as array transformation, event callbacks, and composition.',prerequisites:['Functions','Parameters and arguments','Return values'],terms:['callback','function value','composition'],example:'function applyTwice(fn, value) {\n  return fn(fn(value));\n}\napplyTwice(n => n + 1, 3); // 5',mistakes:['Calling the callback immediately when a function value is expected.','Passing a callback that does not handle the value it receives.'],related:['Array methods','Map','Filter','Reduce']},
 'Map':{definition:'Array.prototype.map() calls a callback for each array item and returns a new array of callback results.',why:'Mapping converts each item into a corresponding value while leaving the source array unchanged.',prerequisites:['Arrays','Higher-order functions','Arrow functions'],terms:['callback','source array','mapped value'],example:'const doubled = [1, 2, 3].map(n => n * 2);\n// [2, 4, 6]',mistakes:['Using map() only for side effects.','Forgetting to return a value from a block-bodied callback.'],related:['Filter','Reduce','Array methods']},
 'Filter':{definition:'Array.prototype.filter() returns a new array containing source items whose callback result is truthy.',why:'Filtering selects records that meet a rule without mutating the original collection.',prerequisites:['Arrays','Conditions','Higher-order functions'],terms:['predicate','truthy','filtered array'],example:'const adults = people.filter(person => person.age >= 18);',mistakes:['Returning an item instead of a boolean-like test.','Expecting filter() to change the original array.'],related:['Map','Reduce','Array methods']},
 'Reduce':{definition:'Array.prototype.reduce() combines array items into one accumulated result using a reducer callback.',why:'Reduction is useful for totals, grouped values, and deriving one summary from a collection.',prerequisites:['Arrays','Higher-order functions','Return values'],terms:['accumulator','initial value','reducer'],example:'const total = [3, 4, 5].reduce((sum, n) => sum + n, 0);\n// 12',mistakes:['Omitting an intentional initial value.','Returning the wrong accumulator type.'],related:['Map','Filter','Array methods']},
 'Event bubbling':{definition:'For many DOM events, propagation travels from the event target through its ancestors toward the document.',why:'Understanding propagation explains why ancestor listeners can respond to descendant events and how handlers interact.',prerequisites:['DOM','Events'],terms:['target','currentTarget','propagation'],example:'list.addEventListener("click", event => {\n  console.log(event.target);\n});',mistakes:['Confusing event.target with event.currentTarget.','Assuming every event bubbles.'],related:['Event capturing','Event delegation']},
 'Event delegation':{definition:'Event delegation handles events from matching descendants with a listener attached to a stable ancestor.',why:'It reduces listener setup for repeated or dynamically added items and keeps event handling in one place.',prerequisites:['DOM','Events','Event bubbling','DOM traversal'],terms:['event.target','currentTarget','closest()','bubbling'],example:'list.addEventListener("click", event => {\n  const button = event.target.closest("button[data-action]");\n  if (!button || !list.contains(button)) return;\n  handle(button.dataset.action);\n});',mistakes:['Handling clicks that do not come from a matching child.','Forgetting nested click targets and closest().','Using delegation for an event that does not bubble without an alternative.'],related:['Events','Event bubbling','Event capturing']},
 'Promises':{definition:'A Promise represents the eventual fulfillment or rejection of an asynchronous operation.',why:'Promises make completion and failure explicit so later work can wait for a result without blocking the main thread.',prerequisites:['Functions','Callbacks','Error handling'],terms:['pending','fulfilled','rejected','then','catch'],example:'fetch("/api/lessons")\n  .then(response => {\n    if (!response.ok) throw new Error("Request failed");\n    return response.json();\n  })\n  .catch(error => showError(error));',mistakes:['Assuming fetch rejects for HTTP error status codes.','Forgetting to return a promise from a then() callback.','Leaving a rejection unhandled.'],related:['Promise chaining','Async/await','Fetch API','Event loop']},
 'Promise chaining':{definition:'Promise chaining connects asynchronous steps by returning a value or promise from each then() handler.',why:'Chaining preserves the order of dependent asynchronous work and provides one error path.',prerequisites:['Promises','Return values'],terms:['then()','chain','rejection propagation'],example:'getUser()\n  .then(user => getProjects(user.id))\n  .then(projects => render(projects))\n  .catch(showError);',mistakes:['Nesting callbacks instead of returning the next promise.','Forgetting return inside a handler.'],related:['Promises','Async/await']},
 'Async/await':{definition:'async functions and await provide syntax for working with promises using sequential-looking control flow.',why:'They make dependent asynchronous steps easier to read while preserving promise-based behavior.',prerequisites:['Promises','Error handling'],terms:['async','await','try/catch'],example:'async function load() {\n  try {\n    const response = await fetch("/api/lessons");\n    if (!response.ok) throw new Error("Request failed");\n    return await response.json();\n  } catch (error) {\n    showError(error);\n  }\n}',mistakes:['Using await outside an async context when the environment requires one.','Assuming await makes CPU-heavy work non-blocking.','Skipping HTTP status checks.'],related:['Promises','Fetch API','Error handling']},
 'Fetch API':{definition:'The Fetch API provides a promise-based interface for making HTTP requests and reading responses.',why:'It connects browser interfaces to server or public API data.',prerequisites:['HTTP','Promises','JSON'],terms:['Request','Response','status','headers','body'],example:'const response = await fetch("/api/concepts");\nif (!response.ok) throw new Error(`HTTP ${response.status}`);\nconst concepts = await response.json();',mistakes:['Treating a 404 response as a rejected fetch promise.','Reading the response body more than once.','Ignoring network and parsing errors.'],related:['APIs','Promises','Async/await','JSON']},
 'Semantic HTML':{definition:'Semantic HTML uses elements that convey the role and structure of their content.',why:'Meaningful markup improves navigation, accessibility, maintainability, and how tools interpret a page.',prerequisites:['HTML document structure'],terms:['landmark','heading hierarchy','native semantics'],example:'<main>\n  <article>\n    <h1>Lesson title</h1>\n    <p>Lesson content…</p>\n  </article>\n</main>',mistakes:['Choosing an element only for its default appearance.','Replacing native controls with custom clickable divs.','Skipping heading levels without a structural reason.'],related:['Accessibility attributes','ARIA fundamentals','Navigation']},
 'ARIA fundamentals':{definition:'ARIA attributes add accessibility semantics when native HTML cannot express a widget role or state.',why:'Correct ARIA can expose names, roles, values, and state to assistive technologies.',prerequisites:['Semantic HTML','Accessibility attributes'],terms:['role','accessible name','state','property'],example:'<button aria-expanded="false" aria-controls="details">Show details</button>',mistakes:['Adding redundant roles to native HTML.','Using ARIA instead of a native button or input.','Failing to keep state attributes synchronized with the interface.'],related:['Semantic HTML','Keyboard accessibility']},
 'Flexbox':{definition:'Flexbox is a one-dimensional CSS layout model for arranging items along a row or column.',why:'It handles alignment, distribution, and flexible sizing when layout follows one main axis.',prerequisites:['Selectors','Box model','Display'],terms:['flex container','flex item','main axis','cross axis'],example:'.toolbar { display: flex; align-items: center; gap: 1rem; }',mistakes:['Using Flexbox for a layout that needs coordinated rows and columns.','Confusing main and cross axes after changing flex-direction.'],related:['CSS Grid','Display','Responsive design']},
 'CSS Grid':{definition:'CSS Grid is a two-dimensional layout system that coordinates rows and columns.',why:'Grid makes complex page regions and aligned tracks explicit and responsive.',prerequisites:['Selectors','Box model','Display'],terms:['grid container','track','grid line','gap'],example:'.layout { display: grid; grid-template-columns: 16rem 1fr; gap: 1.5rem; }',mistakes:['Hard-coding widths that overflow small screens.','Adding unnecessary nested grids for simple one-axis alignment.'],related:['Flexbox','Responsive design','Media queries']},
 'Primary keys':{definition:'A primary key is a table constraint that uniquely identifies each row and cannot be null.',why:'Stable row identity supports reliable updates and relationships with other tables.',prerequisites:['Tables','Relational databases'],terms:['unique','not null','candidate key'],example:'CREATE TABLE learner (\n  id INTEGER PRIMARY KEY,\n  display_name VARCHAR(80) NOT NULL\n);',mistakes:['Choosing a value that changes frequently as an identifier.','Assuming a primary key automatically captures every business rule.'],related:['Foreign keys','Constraints','Relationships']},
 'Foreign keys':{definition:'A foreign key constrains a column or columns to reference a key in another table.',why:'It helps keep relationships valid and prevents references to missing rows.',prerequisites:['Tables','Primary keys','Relationships'],terms:['referential integrity','referenced table','on delete'],example:'CREATE TABLE enrollment (\n  learner_id INTEGER REFERENCES learner(id),\n  course_id INTEGER REFERENCES course(id)\n);',mistakes:['Ignoring what should happen on update or deletion.','Referencing a column that is not uniquely constrained.'],related:['Primary keys','Constraints','Joins']},
 'Authentication':{definition:'Authentication verifies the identity associated with a request or session.',why:'It lets an application provide account-specific services while protecting private actions and data.',prerequisites:['HTTP requests and responses','Sessions'],terms:['identity','credential','session','multi-factor authentication'],example:'// Server-side pseudocode\nuser = verifyCredentials(email, password)\nif user: createSecureSession(user.id)',mistakes:['Storing plain-text passwords.','Confusing authentication with authorization.','Trusting a client-side login flag as proof of identity.'],related:['Authorization','Sessions','Password handling']},
 'Authorization':{definition:'Authorization decides whether an authenticated identity may perform a specific action on a resource.',why:'It enforces least privilege and prevents one user from accessing another user’s private information.',prerequisites:['Authentication','Roles'],terms:['permission','policy','least privilege'],example:'if (!policy.allows(user, "update", task)) return forbidden();',mistakes:['Checking only that a user is logged in.','Relying on hidden buttons instead of server-side access checks.'],related:['Authentication','Roles','Backend security']}
};

const GLOSSARY=Object.fromEntries(`
Introduction to programming|Writing instructions that a computer can execute to transform input into useful output.
Problem-solving|Breaking a problem into smaller parts, identifying constraints, and checking possible solutions.
Algorithms|Finite, ordered steps that solve a problem or compute a result.
Pseudocode|A language-neutral way to describe an algorithm before choosing exact programming syntax.
Constants|Named bindings whose assigned value cannot be replaced through that binding.
Operators|Symbols or keywords that combine, compare, or transform values.
Expressions|Combinations of values and operators that evaluate to a result.
If / else|A branching statement that runs one block when a condition is true and another when it is false.
Switch statements|A control-flow statement that selects a case based on one expression's value.
Loops|Control-flow structures that repeat work while a count or condition allows it.
For loops|A loop form commonly used when initialization, a continuation test, and an update are explicit.
While loops|A loop that repeats its body while its condition remains true.
Parameters and arguments|Parameters are function input names; arguments are the values supplied when the function is called.
Return values|Values a function sends back to its caller with a return statement.
Scope|The region of code where a binding can be accessed.
Arrays|Ordered, indexed collections of values.
Objects|Keyed collections used to represent related properties and behavior.
Basic debugging|A process of reproducing a problem, inspecting evidence, isolating a cause, and checking a fix.
Computer fundamentals|Basic ideas about hardware, software, memory, storage, and how a computer runs programs.
Operating systems|System software that manages hardware, files, processes, and user interaction.
File systems|Structures and rules used by an operating system to name, organize, and access files.
Terminal basics|Using a text interface to run commands and inspect or change a development workspace.
Command-line navigation|Moving through directories and inspecting paths with shell commands.
Basic project organization|A predictable file and folder structure that helps people find and maintain code.
Git fundamentals|Version control concepts for recording and reviewing changes to files over time.
Repository creation|Initializing or creating a version-controlled project history.
Commits|Snapshots of selected changes with a message describing the intent.
Branches|Independent lines of development that let changes be made and reviewed separately.
GitHub|A hosted platform for Git repositories, collaboration, issue tracking, and code review.
Collaboration|Coordinating work through shared plans, version control, communication, and review.
UI versus UX|UI concerns the interface people interact with; UX covers the broader experience and outcomes of use.
User research|A structured way to learn about people's goals, contexts, and difficulties.
User personas|Evidence-informed summaries of user needs and contexts used to guide design discussions.
User journeys|Descriptions of steps and touchpoints a person experiences while trying to reach a goal.
Information architecture|The organization, naming, and navigation of information in a product.
Wireframes|Low-detail layouts that show content structure and interaction priorities.
Prototypes|Interactive or visual representations used to explore and test a design before production.
Visual hierarchy|The arrangement of size, contrast, spacing, and position that guides attention.
Typography|The selection and arrangement of type to support legibility, hierarchy, and tone.
Color theory|Principles for choosing and combining colors to communicate and maintain contrast.
Spacing|Consistent gaps and margins that organize content and make relationships clear.
Design systems|Shared tokens, components, and guidance that keep product interfaces coherent.
Frames|Figma containers that define the bounds and layout context of a design.
Components|Reusable Figma elements that keep repeated design patterns consistent.
Auto Layout|Figma behavior for arranging and resizing child layers based on spacing and alignment rules.
Constraints|Rules that describe how an element responds when its parent frame changes size.
Variants|Named states or configurations grouped within a reusable Figma component set.
Design tokens|Named design values such as color, type size, and spacing that can be reused consistently.
Interactive prototypes|Linked design states that simulate a user flow without implementing production behavior.
Developer handoff|The process of sharing design intent, assets, measurements, and interaction states with implementers.
How the web works|A broad view of browsers, servers, networks, and protocols working together to deliver web content.
Client-server architecture|A model where clients request services or data from a server that processes and responds.
DNS|The Domain Name System maps domain names to network records used to locate services.
HTTP|A request-response protocol used to transfer web resources and application data.
HTTPS|HTTP protected by TLS, providing encrypted transport and server authentication.
Browser rendering|The process by which a browser parses documents and styles, builds a page, and paints it to screen.
Hosting|Providing compute and network services so an application can be reached by users.
Domains|Human-readable names used to identify internet services and route requests through DNS.
HTML document structure|The elements and metadata that form a valid HTML document and describe its content.
Headings|Elements that label sections and establish a navigable content hierarchy.
Paragraphs|Elements used to mark prose as a distinct block of text.
Lists|Ordered or unordered groups of related items represented with list elements.
Links|Anchor elements that navigate to another location or resource.
Images|Embedded visual resources that need appropriate sizing and meaningful text alternatives when informative.
Forms|HTML structures that collect user input and provide a submission interaction.
Input elements|Form controls for collecting typed, selected, or specialized values.
Buttons|Native controls that trigger an action or submit a form.
Tables|Elements for presenting data with meaningful row and column relationships.
Header|A semantic section for introductory or navigational content for a page or region.
Navigation|A landmark or region containing links for moving among pages or sections.
Main|The landmark containing the primary content of a document.
Article|A self-contained composition that can be understood or distributed on its own.
Section|A thematically grouped region of a document, usually with a heading.
Aside|A region with content related to the surrounding content but not central to its flow.
Footer|A closing region for a page or section, often containing related links or metadata.
Accessibility attributes|HTML attributes and semantics that help expose names, states, and relationships to assistive technology.
Selectors|CSS patterns used to choose which document elements receive declarations.
Specificity|The ordering rule browsers use to resolve competing selector declarations.
Inheritance|The way some CSS property values pass from an ancestor to descendants.
Box model|The content, padding, border, and margin areas that contribute to element layout.
Display|A CSS property that determines how an element participates in layout.
Position|A CSS property that changes how an element is placed relative to normal flow or a containing block.
Media queries|Conditional CSS rules that apply styles based on viewport or user environment features.
Responsive design|A design approach that adapts layout and content to available space and device capabilities.
Mobile-first methodology|Starting with narrow-screen constraints and progressively enhancing the layout for wider screens.
Custom properties|Reusable CSS values declared with double-dash names and referenced through var().
Pseudo-classes|Selectors for element states or structural conditions, such as hover or focus-visible.
Pseudo-elements|Selectors that style a generated part of an element, such as ::before.
Transitions|CSS interpolation between property values over a specified duration and easing curve.
Animations|Timed CSS keyframe sequences for visual state changes.
CSS architecture|Naming and organization conventions that make styles easier to extend without unintended collisions.
JavaScript fundamentals|Core language rules for values, expressions, control flow, functions, and objects.
Arrow functions|Function expressions with concise syntax and lexical this behavior.
Scope and closures|Scope controls binding visibility; a closure retains access to its surrounding lexical bindings.
Array methods|Built-in operations for querying, transforming, iterating over, and composing arrays.
DOM|The Document Object Model is the browser's structured object representation of a document.
DOM manipulation|Reading or changing document nodes, attributes, text, or styles through DOM APIs.
DOM traversal|Moving between document nodes such as parents, children, and siblings.
Events|Browser signals that describe user actions or other changes and can be handled by listeners.
Event capturing|An event propagation phase that travels from outer ancestors toward the target before bubbling.
Forms and validation|Collecting form values and checking that they meet constraints before processing.
Date objects|JavaScript objects for representing timestamps and performing date-related operations.
Timers|Browser APIs such as setTimeout and setInterval that schedule callbacks for later execution.
Error handling|Detecting and responding to failures so an application can recover or communicate clearly.
JSON|A text format for representing structured values commonly exchanged between applications.
Callbacks|Functions passed to other code to be called later or in response to an event.
APIs|Defined interfaces that let software systems request data or operations from one another.
Event loop|The runtime mechanism that schedules tasks and microtasks around JavaScript execution.
Microtasks|High-priority queued jobs, including promise reactions, processed after the current stack before the next task.
Macrotasks|A common informal name for event-loop tasks such as timers and user events; the HTML standard calls them tasks.
Microtasks and macrotasks|An informal comparison of microtask checkpoints and task-queue work in the event loop.
ES modules|JavaScript's standardized module system using import and export declarations.
Local storage|A browser key-value store that persists string data for an origin across sessions.
Session storage|A browser key-value store scoped to an origin and a top-level browsing session.
TypeScript|A typed superset of JavaScript that checks many types before code runs and emits JavaScript.
Static typing|Checking value and operation compatibility from declared or inferred types during development.
Interfaces|TypeScript declarations that describe the expected shape of an object.
Types|Descriptions of the values a program expects and the operations that are valid for them.
Generics|Type parameters that let functions and structures work with multiple types while retaining relationships.
React|A JavaScript library for composing user interfaces from reusable components.
Props|Inputs passed from a parent component to configure a React component.
State|Data a component retains that can cause its view to update when changed.
Hooks|React functions that let components use state and other React capabilities.
Context|A React mechanism for making values available to descendants without passing each value through every layer.
Routing|Mapping a URL or navigation action to a particular view or server handler.
Component lifecycle concepts|The stages and effects associated with creating, updating, and removing a UI component.
API integration|Connecting an application to an external or internal interface and handling its response.
State management|Organizing and updating application data that determines what a user sees.
Reusable components|UI units designed to be composed or configured in more than one context.
Keyboard accessibility|Ensuring people can operate controls and navigate content using a keyboard.
Screen reader semantics|Meaning and state exposed through HTML and accessibility APIs for assistive technologies.
Color contrast|The luminance difference between foreground and background needed for readable content.
Reduced motion|A system preference that asks interfaces to limit nonessential movement.
Unit testing|Testing a small function or module in isolation from larger application systems.
Integration testing|Testing that multiple parts work together across a defined boundary.
End-to-end testing|Testing a realistic user path through an application as a whole.
Browser developer tools|Browser utilities for inspecting markup, styles, runtime behavior, network activity, and performance.
Web performance basics|Measurements and practices that improve responsiveness, loading, and visual stability.
Deployment fundamentals|Making a tested application available in a target environment.
Environment configuration|Managing environment-specific settings without embedding secrets in source code.
Security basics|Practices that reduce common risks to application data, accounts, and runtime behavior.
Database fundamentals|Concepts for storing, organizing, querying, and protecting persistent application data.
Relational databases|Databases that represent data in related tables with defined constraints.
Database design|Choosing entities, attributes, relationships, and constraints to represent a domain.
Entity Relationship Diagrams|Visual models of entities, their attributes, and relationships.
Tables|Relational structures that store rows of records with a consistent set of columns.
Data types|Column definitions that constrain or describe the values stored in a database.
Foreign keys|Constraints that require values to refer to valid keys in a related table.
Relationships|Connections between entities, commonly one-to-one, one-to-many, or many-to-many.
Constraints|Database rules that reject invalid values or relationships.
SQL statements|Commands in SQL used to define, query, or change relational data.
SELECT and filtering|Querying rows and limiting results to records that meet conditions.
Sorting and limiting|Ordering query results and restricting how many rows are returned.
INSERT|An SQL command that adds rows to a table.
UPDATE|An SQL command that changes values in existing rows.
DELETE|An SQL command that removes selected rows from a table.
Joins|SQL operations that combine rows from tables using related values.
Aggregation|Calculations that summarize multiple rows into a result such as a count or sum.
GROUP BY and HAVING|SQL clauses that form groups and filter grouped results.
Subqueries|Queries nested inside another SQL statement.
Indexes|Data structures that can speed up selected database lookups at a storage and write cost.
Query plans|Database explanations of the operations chosen to execute a query.
Normalization|A design process that reduces duplication and update anomalies in relational schemas.
Transactions|Groups of database operations treated as one unit with commit or rollback behavior.
ACID properties|Atomicity, consistency, isolation, and durability principles for transaction behavior.
Migrations|Versioned schema changes that can be applied consistently across environments.
Data validation|Checks that data meets expected rules before it is stored or used.
Referential integrity|Consistency rules that keep references between related records valid.
Backup and restore basics|Practices for preserving database copies and recovering them when needed.
Server-side programming|Code that runs on a server to validate requests, apply logic, and return responses.
PHP syntax and types|PHP rules for expressions, values, declarations, and type behavior.
Functions and arrays|PHP constructs for reusable operations and ordered or keyed collections.
Object-oriented programming|A programming approach that organizes state and behavior around objects and types.
Classes and objects|Classes define a type and behavior; objects are instances with their own state.
Encapsulation|Controlling how internal state is accessed and changed through a public interface.
Inheritance|A type relationship where a class derives behavior or structure from another class.
Polymorphism|Using a shared interface with different concrete implementations.
Exceptions|Objects or signals used to report and handle exceptional conditions in a program.
HTTP requests and responses|Messages clients send to servers and the responses servers return.
Controllers|Application units that coordinate a request with validation, domain logic, and a response.
Middleware|Code that runs around request handling to inspect or modify requests and responses.
MVC|An architectural pattern that separates models, views, and controllers by responsibility.
CRUD|The common data operations create, read, update, and delete.
REST APIs|HTTP interfaces organized around resources and standard methods, with constraints for interoperability.
Serialization|Converting structured values into a format that can be transmitted or stored.
Request validation|Checking untrusted request data against rules before application processing.
Sessions|Server-associated state linked to a client through a session identifier.
Password handling|Secure creation, hashing, storage, reset, and verification of password credentials.
CSRF|Cross-site request forgery is an attack that tricks an authenticated browser into submitting an unwanted request.
SQL injection|A vulnerability where untrusted input changes the meaning of a database query.
Output encoding|Escaping values for a specific output context so data is not interpreted as executable markup or code.
Backend security|Practices for protecting server routes, inputs, identities, secrets, and persisted data.
Rate limiting|Restricting request frequency to reduce abuse and protect service capacity.
Secrets management|Storing and providing credentials or keys without placing them in public source code.
Laravel|A PHP web framework that provides routing, middleware, validation, database, and application tools.
Laravel routing|Mapping HTTP methods and URL patterns to request handlers in Laravel.
Request validation|Checking incoming data against an explicit set of allowed rules.
Eloquent models|Laravel's ORM representation of database records and relationships.
Migrations and seeders|Versioned schema definitions and repeatable data-population routines.
Policies and gates|Laravel authorization mechanisms for deciding whether a user may perform an action.
Laravel API resources|Transformers that shape model data for API responses.
CMS fundamentals|Concepts for managing structured digital content separately from page presentation.
Content architecture|A plan for content types, fields, relationships, ownership, and publishing needs.
Content types|Named structures that define fields and validation for a kind of content.
Taxonomies|Classification structures used to group and find content.
Templates|Presentation structures that render data into a page or component.
Themes|A coordinated set of presentation assets and templates for a site.
Plugins|Extensions that add behavior to a content management platform.
CMS customization|Configuration or code changes that adapt a content system to a particular need.
Roles and editorial workflow|Permissions and review stages that coordinate content creation and publication.
Navigation structure|The grouping and labeling of links that helps people move through a site.
Content modeling|Defining structured fields and relationships that represent content consistently.
Search|A method for finding content by matching queries against indexed information.
SEO|Practices that help search engines understand and index public content appropriately.
Metadata|Descriptive information associated with a page or content item.
Accessibility in CMS content|Authoring and template practices that make published content usable by more people.
Theme configuration|Settings that adjust an existing theme's appearance or behavior.
E-commerce architecture|Systems and data flows that support product browsing, carts, checkout, orders, and fulfillment.
Product catalogs|Structured collections of products and their attributes.
Categories|Labels or hierarchies that organize products for browsing.
Product management|Creating, updating, and maintaining product information and availability.
Product details|Attributes and content that help a shopper understand a particular item.
Shopping carts|A temporary collection of products a shopper intends to purchase.
Checkout concepts|Steps for collecting order, delivery, and payment choices before purchase confirmation.
Payments and order states|The status transitions and records used while an order is paid, processed, or canceled.
Customer support basics|Ways to help users with product, delivery, return, or account questions.
Component boundaries|Rules for what a component owns and what it expects from its environment.
Component configuration|Inputs and settings that change a reusable component's content or behavior.
Variants and states|Distinct visual or behavioral modes a component can display.
Design-system alignment|Using shared tokens and component conventions so interface parts stay consistent.
Data mapping|Transforming source fields into the shape a component or destination expects.
Integration|Connecting separately defined components or systems through a clear interface.
Empty and error states|User-visible responses for missing content, failed operations, or unavailable data.
Content fallbacks|Safe alternate content shown when an expected value or asset is unavailable.
Accessibility checks|Reviews of keyboard use, semantics, labels, contrast, and assistive technology behavior.
Optimization|Changes that improve quality, speed, resource use, or maintainability against measured needs.
Performance budgets|Limits for measurable loading or runtime resources used to prevent regressions.
Maintenance|Ongoing work that keeps a system reliable, understandable, and compatible.
Documentation|Written guidance that helps people use, change, or support a system.
Versioning and change management|Practices for tracking releases and communicating changes safely.
`.trim().split('\n').map(row=>{const [key,...rest]=row.split('|');return [key.trim(),rest.join('|').trim()]}));

const JS_GROUPS=[
 ['Language basics',new Set(['JavaScript fundamentals','Variables','Data types','Constants','Operators','Expressions'])],
 ['Control flow and functions',new Set(['Conditions','If / else','Switch statements','Loops','For loops','While loops','Functions','Arrow functions','Scope and closures','Higher-order functions','Parameters and arguments','Return values'])],
 ['Data and collections',new Set(['Arrays','Objects','Destructuring','Spread and rest operators','Array methods','Map','Filter','Reduce'])],
 ['The browser and events',new Set(['DOM','DOM manipulation','DOM traversal','Events','Event bubbling','Event capturing','Event delegation','Forms and validation','Date objects','Timers'])],
 ['Asynchronous JavaScript',new Set(['Callbacks','Promises','Promise chaining','Async/await','Fetch API','APIs','Event loop','Microtasks','Macrotasks','Microtasks and macrotasks','Error handling','JSON'])],
 ['Modules and storage',new Set(['ES modules','Local storage','Session storage'])]
];
function topicGroup(module,title){
 if(module.name==='JavaScript')return JS_GROUPS.find(([,set])=>set.has(title))?.[0]||'JavaScript foundations';
 if(module.name==='HTML5'){if(['HTML document structure','Headings','Paragraphs'].includes(title))return 'Document structure';if(['Lists','Links','Images','Tables'].includes(title))return 'Text and content';if(['Forms','Input elements','Buttons'].includes(title))return 'Forms and controls';if(['Semantic HTML','Header','Navigation','Main','Article','Section','Aside','Footer'].includes(title))return 'Semantic page regions';return 'Accessibility'}
 if(module.name==='CSS3'){if(['Selectors','Specificity','Inheritance','Box model','Display','Position'].includes(title))return 'Cascade and foundations';if(['Flexbox','CSS Grid'].includes(title))return 'Layout systems';if(['Media queries','Responsive design','Mobile-first methodology'].includes(title))return 'Responsive layouts';if(['Custom properties','Pseudo-classes','Pseudo-elements'].includes(title))return 'Reusable styling';if(['Transitions','Animations'].includes(title))return 'Motion';return 'Maintainable CSS'}
 if(module.name==='Programming Fundamentals'){if(['Introduction to programming','Problem-solving','Algorithms','Pseudocode'].includes(title))return 'Problem framing';if(['Variables','Data types','Constants','Operators','Expressions'].includes(title))return 'Values and expressions';if(['Conditions','If / else','Switch statements','Loops','For loops','While loops'].includes(title))return 'Control flow';if(['Functions','Parameters and arguments','Return values','Scope'].includes(title))return 'Reusable behavior';return 'Structured data and debugging'}
 if(module.name==='SQL and Querying'){if(['SQL statements','SELECT and filtering','Sorting and limiting'].includes(title))return 'Reading data';if(['INSERT','UPDATE','DELETE'].includes(title))return 'Changing data';if(['Joins','Aggregation','GROUP BY and HAVING','Subqueries'].includes(title))return 'Combining and summarizing';return 'Query performance'}
 if(/Database/.test(module.name)||module.name==='Integrity and Data Quality'){if(['Normalization','Transactions','ACID properties','Migrations','Data validation','Referential integrity','Backup and restore basics'].includes(title))return 'Integrity and maintenance';return 'Relational modeling'}
 if(/Security|Identity/.test(module.name)||module.name.includes('Identity'))return ['Authentication','Authorization','Sessions','Password handling'].includes(title)?'Identity and access':'Application security';
 if(module.name.includes('UI/UX'))return ['UI versus UX','User research','User personas','User journeys'].includes(title)?'Understanding users':['Information architecture','Wireframes','Prototypes'].includes(title)?'Structure and prototypes':'Visual systems';
 if(module.name==='Essential Developer Skills')return ['Git fundamentals','Repository creation','Commits','Branches','GitHub','Collaboration'].includes(title)?'Version control and teamwork':'Computer and terminal basics';
 if(module.name==='Web Foundations')return ['How the web works','Client-server architecture','DNS','HTTP','HTTPS'].includes(title)?'Requests and protocols':'Browsers and publishing';
 return module.name;
}

function slugify(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function resourcesFor(phaseIndex,module,title){
 const specific=TOPIC_RESOURCES[title];
 if(specific)return [{...specific,lastVerified:'2026-11-07'}];
 const pick=(...titles)=>titles.map(t=>RESOURCE_CATALOG.find(r=>r.title===t)).filter(Boolean).map(r=>({...r,lastVerified:'2026-11-07'}));
 if(module.name==='HTML5')return pick('MDN Web Docs','W3C Standards');
 if(module.name==='CSS3')return pick('MDN Web Docs','W3Schools');
 if(module.name==='JavaScript')return [{title:'JavaScript Guide',url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',source:'MDN',type:'Official documentation',description:'A structured guide to the JavaScript language.',language:'English',lastVerified:'2026-11-07'},pick('freeCodeCamp Learn')[0]].filter(Boolean);
 if(module.name.includes('Git')||title.toLowerCase().includes('git'))return pick('Git documentation','freeCodeCamp Learn');
 if(module.name.includes('PHP'))return [{title:'PHP Language Reference',url:'https://www.php.net/manual/en/langref.php',source:'PHP',type:'Official documentation',description:'Official syntax and language reference.',language:'English',lastVerified:'2026-11-07'}];
 if(module.name.includes('React'))return pick('React documentation','TypeScript documentation');
 if(module.name.includes('TypeScript'))return pick('TypeScript documentation');
 if(module.name.includes('Laravel'))return pick('Laravel documentation');
 if(phaseIndex===2)return pick('MDN Web Docs','W3Schools');
 if(phaseIndex===3)return pick('GeeksforGeeks','freeCodeCamp Learn');
 if(phaseIndex===4)return pick('PHP documentation','MDN Web Docs');
 if(phaseIndex===1)return pick('W3C Standards','MDN Web Docs');
 return pick('freeCodeCamp Learn','GeeksforGeeks');
}
function topicContext(module,title){
 const note=CONCEPT_NOTES[title],group=topicGroup(module,title);
 const definition=note?.definition||GLOSSARY[title]||`A recommended study topic related to ${module.name}. Confirm the precise meaning with the linked publisher reference.`;
 const previous=module.topics[module.topics.indexOf(title)-1];
 const prerequisites=note?.prerequisites|| (previous?[previous]:[]);
 return {topic:group,classification:'recommended-supplement',definition,explanation:note?.definition||definition,whyItMatters:note?.why||`This topic supports ${group.toLowerCase()} in the ${module.name} module and gives you a building block to practice in a project.`,prerequisites,objectives:note?.objectives||[`Define ${title} and its purpose.`,`Explain how it relates to ${group.toLowerCase()}.`,`Demonstrate one practical use of ${title}.`],terminology:(note?.terms||[title]).map(term=>({term,definition:term===title?definition:`A term to recognize when studying ${title}.`})),codeExample:note?.example||'',commonMistakes:note?.mistakes||['Do not infer behavior from the name alone; verify it in the linked reference.','Check edge cases and the surrounding context when applying this concept.'],exercise:note?.exercise||`Use a linked reference to check the exact behavior of ${title.toLowerCase()}, then create a short example and explain its result.`,relatedConcepts:note?.related||[previous,module.topics[module.topics.indexOf(title)+1]].filter(Boolean),editorialStatus:note?'Reviewed note':'Starter glossary definition'};
}
export const CURRICULUM=PHASES.map((phase,pi)=>({...phase,index:pi,id:`phase-${pi+1}`,classification:'official-title-with-recommended-extension',source:'Official phase title; detailed learning map is recommended material',modules:phase.modules.map((mod,mi)=>({...mod,id:`phase-${pi+1}-module-${mi+1}`,phaseIndex:pi,concepts:mod.topics.map((title,ci)=>{const context=topicContext(mod,title);return {id:`p${pi+1}-m${mi+1}-${slugify(title)}`,title,phaseIndex:pi,moduleIndex:mi,supplementary:true,...context,competencies:specialCompetencies[title]||[`Define ${title.toLowerCase()} in your own words.`,`Identify when ${title.toLowerCase()} applies.`,`Demonstrate ${title.toLowerCase()} in a small example.`,`Diagnose a common issue involving ${title.toLowerCase()}.`,`Use ${title.toLowerCase()} in a practical task.`],resources:resourcesFor(pi,mod,title),checklistLabels:['I understand the theory','I can explain the concept','I can write the code independently','I can debug related errors','I can apply it in a project']}})}))}));
export const CONCEPTS=CURRICULUM.flatMap(p=>p.modules.flatMap(m=>m.concepts));
export const QUIZ_BANK=[
 {id:'q-js-filter',concept:'Filter',type:'multiple-choice',question:'What does Array.filter() return?',options:['A number','A new array containing elements that pass the test','The original array only','An object'],answer:1,explanation:'filter() creates a new array containing items for which the callback returns a truthy value. The original array is not changed.',related:'Filter'},
 {id:'q-html-semantic',concept:'Semantic HTML',type:'multiple-choice',question:'Why use a semantic element such as <nav>?',options:['It automatically adds visual styling','It communicates the purpose of the content to browsers and assistive technology','It replaces CSS','It makes the page load faster by itself'],answer:1,explanation:'Semantic elements describe the role of their content and help browsers, tools, and people understand page structure.',related:'Semantic HTML'},
 {id:'q-event-delegation',concept:'Event delegation',type:'short-answer',question:'In one or two sentences, explain why a listener on a parent can handle clicks from its child buttons.',answerText:'Events bubble from a target toward ancestors, so a parent listener can inspect the target and respond to matching descendants.',explanation:'Event bubbling lets an ancestor receive events from descendants. Check the target (often with closest()) before handling it.',related:'Event delegation'},
 {id:'q-sql-foreign',concept:'Foreign keys',type:'true-false',question:'A foreign key can express a relationship to a row in another table.',answer:true,explanation:'A foreign-key constraint links values to a candidate key in a related table and helps preserve referential integrity.',related:'Foreign keys'},
 {id:'q-js-promise',concept:'Promises',type:'fill-blank',question:'A Promise represents the eventual success or failure of an ______ operation.',answerText:'asynchronous',explanation:'A promise represents a result that may become available later, either fulfilled or rejected.',related:'Promises'},
 {id:'q-php-error',concept:'PHP fundamentals',type:'identify-error',question:'Find the syntax issue: $name = "Amina"\necho $name;',answerText:'The assignment line is missing a semicolon.',explanation:'PHP statements commonly end in a semicolon. Add ; after the assignment.',related:'PHP fundamentals'},
 {id:'q-js-output',concept:'Array methods',type:'code-output',question:'What does this expression produce? [2, 4, 6].map(n => n / 2)',options:['[1, 2, 3]','[2, 4, 6]','3','undefined'],answer:0,explanation:'map() calls the callback for each item and returns a new array of the results.',related:'Map'},
 {id:'q-match',concept:'Primary keys',type:'match',question:'Match the database term to its role: Primary key / Foreign key.',answerText:'Primary key identifies a row; foreign key refers to a related row.',explanation:'The primary key identifies a row within its table. A foreign key stores a reference to a key in another table.',related:'Primary keys'}
];
export function findConcept(id){return CONCEPTS.find(c=>c.id===id)}
export function phaseById(id){return CURRICULUM.find(p=>p.id===id)}
