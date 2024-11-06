import "./rate.css";

export default function Ratecard() {
  return (
    <div className="RateContainer">
      <div className="flex PriceContainer">
        <tex>Price</tex>
        <text>Value</text>
      </div>
      <div className="flex itemsContainer">
        <ul>
          <li>Items</li>
          <li>Value</li>
        </ul>
      </div>
      <div className="flex gstContainer">
        <tex>GST</tex>
        <text>Value</text>
      </div>
      <div className="flex TotalContainer">
        <tex>Total </tex>
        <text>Price</text>
      </div>
    </div>
  );
}
