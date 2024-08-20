### Child

```html
<div class="...">
    <div
        v-for="item in items"
        class="transform odd:rotate-45 first:rotate-90 last:rotate-90"
    >
        {{ item }}
    </div>
</div>
```

### Dark Mode

```html
<div class="bg-white dark:bg-gray-800">
    <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
    <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
</div>
<button class="lg:dark:hover:bg-white ...">
    <!-- ... -->
</button>
```

### Make a Card

```js
<VacationCard
    img="/img/cancun.jpg"
    imgAlt="Beach in Cancun"
    eyebrow="Private Villa"
    title="Relaxing All-Inclusive Resort in Cancun"
    pricing="$299 USD per night"
    url="/vacations/cancun"
/>
```

### BoxSizing

```html
<div class="box-content box-border h-32 w-32 p-4 border-4 ...">
    <!-- ... -->
</div>
```

### Flow-root

Flow root tạo ra các khối riêng biệt không cho phép các phần tử bên trong tác động ra bên ngoài, nó tương đương với 1 số css trong đó có overflow: hidden

```html
<div class="space-y-4">
    <div class="flow-root ...">
        <div class="my-4 ...">1</div>
    </div>
    <div class="flow-root ...">
        <div class="my-4 ...">2</div>
    </div>
</div>
```

### Flex

```html
<div class="flex inline-flex space-x-4 ...">
    <div class="flex-1 ...">1</div>
    <div class="flex-1 ...">2</div>
    <div class="flex-1 ...">3</div>
</div>
```

### Grid

1. grid
    ```html
    <div class="grid gap-4 grid-cols-3">
        <!-- ... -->
    </div>
    ```
2. inline grid
    ```html
    <span class="inline-grid grid-cols-3 gap-x-4">
        <span>1</span>
        <span>1</span>
        <span>1</span>
    </span>
    <span class="inline-grid grid-cols-3 gap-x-4">
        <span>2</span>
        <span>2</span>
        <span>2</span>
    </span>
    ```
3. chia phần tử

-   Grid template column
    ```html
    <div class="grid grid-cols-3 gap-4">
        <div>1</div>
        <!-- ... -->
        <div>9</div>
    </div>
    ```
-   Grid Column Start/End (col-span)
    ```html
    <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 ...">1</div>
        <div class="col-start-1 col-end-3 ...">2</div>
        <div class="col-end-7 col-span-2 ...">3</div>
        <div class="col-start-1 col-end-7 ...">4</div>
    </div>
    ```

3. contents - Sử dụng nội dung để tạo vùng chứa "ảo" có các phần tử con hoạt động giống như phần tử con trực tiếp của phần tử cha mẹ..
    ```html
    <div class="flex ...">
        <div class="flex-1 ...">1</div>
        <div class="contents">
            <div class="flex-1 ...">2</div>
            <div class="flex-1 ...">3</div>
        </div>
        <div class="flex-1 ...">4</div>
    </div>
    ```

### Table

    ``` html
    <div class="table w-full ...">
    <div class="table-row-group">
        <div class="table-row">
        <div class="table-cell ...">A cell with more content</div>
        <div class="table-cell ...">Cell 2</div>
        <div class="table-cell ...">Cell 3</div>
        </div>
        <div class="table-row">
        <div class="table-cell ...">Cell 4</div>
        <div class="table-cell ...">A cell with more content</div>
        <div class="table-cell ...">Cell 6</div>
        </div>
    </div>
    </div>
    ```

### Isolate

```html
<div id="b" class="a">
    <div id="d">
        <div class="a c">div d: isolation: auto;</div>
    </div>
    <div id="e">
        <div class="a c">div e: isolation: isolate;</div>
    </div>
</div>
```
