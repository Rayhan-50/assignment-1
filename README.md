### Question 1 : What are some differences between interfaces and types in TypeScript?

# TypeScript এ Interface এবং Type: বিস্তারিত দৃষ্টিভঙ্গি

TypeScript হল JavaScript-এর উপরে নির্মিত একটি **strongly typed**, **object-oriented** programming language। এতে type system খুবই গুরুত্বপূর্ণ ভূমিকা পালন করে কোডের নিরাপত্তা, পাঠযোগ্যতা এবং maintainability এর জন্য।

এই প্রক্রিয়ায়, **interface** এবং **type alias** হল দুইটি প্রধান উপায় যেগুলো দিয়ে objects, functions, বা জটিল data structures এর type নির্ধারণ করা হয়। তবে এই দুইয়ের মধ্যে পার্থক্য বুঝে সঠিক স্থান ও পরিস্থিতিতে সেগুলো ব্যবহার করা অত্যন্ত গুরুত্বপূর্ণ।

---

## ১. TypeScript Type System এবং Interface ও Type এর উদ্দেশ্য

TypeScript-এর type system মূলত development-time errors রোধ করে runtime bugs কমানোর জন্য ব্যবহৃত হয়। এখানে **interface** এবং **type** দুইটি টুল এর মাধ্যমে ডেটার কাঠামো নির্ধারণ এবং টাইপ কনট্রাক্ট তৈরি করা হয়।

এগুলো কোডকে আরও readable, reusable এবং scalable করে তোলে। কিন্তু interface এবং type এর ভিন্ন ভিন্ন ক্ষমতা এবং সীমাবদ্ধতা থাকার কারণে, তাদের সঠিক ব্যবহার জানা জরুরি—যাতে কোডের গঠন সঠিক থাকে এবং পরে বাড়ানোর সময় সমস্যা না হয়।

---

## ২. Basic Definitions and Syntax

### ২.১ Interface কী এবং কেমন হয়?

Interface মূলত একটি **named object shape** নির্ধারণের জন্য ব্যবহৃত হয়। এটি JavaScript object এর structure বা contract নির্ধারণ করে।

#### ২.১.১ Syntax এবং Structure

```ts
interface User {
  name: string;
  age: number;
}
```

এখানে `User` interface-এ দুটি প্রপার্টি আছে—`name` এবং `age`।

#### ২.১.২ Simple Interface উদাহরণ

```ts
interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}
```

এখানে method ডিফাইন করা হয়েছে, যা class বা object implement করতে পারে।

---

### ২.২ Type Alias কী এবং কেমন হয়?

Type alias দিয়ে যেকোনো টাইপের একটি নাম দিয়ে ডিফাইন করা যায়। এটি primitive, union, tuple, function কিংবা অন্য type-এর combination হতে পারে।

#### ২.২.১ Syntax এবং Structure

```ts
type ID = string | number;
```

#### ২.২.২ Simple Type Alias উদাহরণ

```ts
type Coordinates = [number, number];
type Callback = (error: Error | null, result?: string) => void;
```

---

### ২.৩ Syntax এর পার্থক্য

| Feature             | Interface    | Type Alias                         |

| Object shape        | ✔ হ্যাঁ      | ✔ হ্যাঁ                            |
| Union types         | ✖ না         | ✔ হ্যাঁ                            |
| Tuple types         | ✖ না         | ✔ হ্যাঁ                            |
| Primitive aliases   | ✖ না         | ✔ হ্যাঁ                            |
| Declaration merging | ✔ সমর্থন করে | ✖ সমর্থন করে না                    |
| Extends keyword     | ✔ হ্যাঁ      | ✖ সরাসরি না (intersection ব্যবহার) |

---

## ৩. Core Differences Between Interface and Type

### ৩.১ Extensibility এবং Declaration Merging

#### ৩.১.১ Interface Declaration Merging

একই নামে একাধিক interface লেখা যায় এবং TypeScript এগুলোকে merge করে:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

এখন `User` interface-এ দুটি প্রপার্টি থাকবে—`name` এবং `age`।

#### ৩.১.২ Type Declaration Merging

Type alias এ declaration merging সমর্থিত নয়।

একই নামে দুইবার type ডিক্লেয়ার করলে error দেবে।

---

### ৩.২ Use Cases এবং Flexibility

#### ৩.২.১ কখন Interface নির্বাচন করবেন?

* অবজেক্ট বা ক্লাসের জন্য সম্ভাব্য **contract** তৈরি করতে
* Extensibility বা declaration merging দরকার হলে
* বড় কোডবেসে consistent structure বজায় রাখতে

#### ৩.২.২ কখন Type নির্বাচন করবেন?

* Union, tuple বা primitive alias লাগলে
* Function, intersection বা conditional types দরকার হলে
* Flexibility এবং reusable complex type চাইলে

---

### ৩.৩ Composition এবং Extension

#### ৩.৩.১ Interface Extending

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

#### ৩.৩.২ Type Aliases Intersection

```ts
type Animal = { name: string };
type Mammal = { hasFur: boolean };

type Dog = Animal & Mammal & { breed: string };
```

---

### ৩.৪ Compatibility and Interoperability

#### ৩.৪.১ Classes এর সঙ্গে Compatibility

Interface সাধারণত class এর জন্য Contract হিসেবে ব্যবহৃত হয়:

```ts
interface User {
  name: string;
  age: number;
}
```

Classes `implements` দিয়ে interface-বিশিষ্ট rules অনুসরণ করতে বাধ্য।

Type alias দিয়ে class-কে সরাসরি implement করা যায় না।

#### ৩.৪.২ Compatibility with Other Types

Type alias জটিল structure যেমন union, intersection, conditional types এর জন্য বেশি উপযোগী।
ইন্টারফেস দিয়ে এগুলো করা কঠিন বা অসম্ভব।

---

## ৪. Advanced Usage and Features

### ৪.১ Interface Implementation in Classes

```ts
interface User {
  name: string;
  age: number;
  greet(): void;
}

class Person implements User {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}
```

---

### ৪.২ Type Aliases for Union & Intersection

```ts
type Success = { status: "success"; data: string };
type Failure = { status: "error"; error: string };

type Response = Success | Failure;
```

---

### ৪.৩ Mapped Types & Conditional Types

Type alias দিয়ে জটিল utility types তৈরি করা যায়:

```ts
type ReadonlyProps<T> = {
  readonly [K in keyof T]: T[K];
};
```

---

### ৪.৪ Hybrid Types and Callable Objects

Type alias দিয়ে function + object hybrid type বানানো যায়:

```ts
type Counter = {
  (start: number): string;
  interval: number;
  reset(): void;
};
```

---

### ৪.৫ Extending and Merging Complex Scenarios

* Interface merging → structure maintain করতে
* Type intersection → জটিল composition সহজ করতে

দুটোই বড় কোডবেসে value যোগ করে।

---

## 📌 Conclusion

TypeScript-এ **interface** এবং **type alias** দুটিই শক্তিশালী এবং দরকারী। তবে—

* Interface → object structure এবং class contracts
* Type → flexible structures, unions, tuples, intersections

যে ক্ষেত্রে যে টুল বেশি উপযোগী, সেখানে সেটাই ব্যবহার করলে কোড হবে আরও পরিষ্কার, maintainable এবং scalable।

