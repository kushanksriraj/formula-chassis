export const List = () => {
  return (
    <div className="m-4 p-5 box-shadow border-1 h-100">
      <div className="heading-2">List</div>
      <div className="separator" />
      <div className="para-normal">
        A list can be used to show multiple related options or links.
      </div>
      <div className="heading-3">Spaced</div>
      <div className="m-4 m-v-6 flex justify-center">
        <ul className="list list-spaced flex space-around w-100">
          <li className="list-item">Item 1</li>
          <li className="list-item">Item 2</li>
          <li className="list-item">Item 3</li>
          <li className="list-item">Item 4</li>
        </ul>
      </div>

      <div className="separator m-v-6 m-h-4" />

      <div className="heading-3">Stacked</div>
      <div className="m-h-8 m-v-6 ">
        <ul className="list list-spaced">
          <li className="list-item m-v-2">Item 1</li>
          <li className="list-item m-v-2">Item 2</li>
          <li className="list-item m-v-2">Item 3</li>
          <li className="list-item m-v-2">Item 4</li>
        </ul>
      </div>
    </div>
  );
};
