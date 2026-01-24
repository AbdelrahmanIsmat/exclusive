import Button from "../common/Button";

const input =
  "w-full py-3 px-4 bg-gray-100 text-sm rounded outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-70";

const PaymentOptions = () => {
  return (
    <div className="max-w-217.5 mx-auto font-Poppins">
      <div className="bg-white rounded shadow-md py-8 px-4 sm:px-8 md:px-16">
        <h2 className="text-xl text-[#DB4444] mb-6">Payment Options</h2>

        {/* Saved Cards */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-4">Saved Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm">Card Holder Name</label>
              <input
                type="text"
                placeholder="John Doe"
                disabled
                className={input}
              />
            </div>

            <div>
              <label className="text-sm">Card Number</label>
              <input
                type="text"
                placeholder="**** **** **** 1234"
                disabled
                className={input}
              />
            </div>

            <div>
              <label className="text-sm">Expiry Date</label>
              <input
                type="text"
                placeholder="08 / 27"
                disabled
                className={input}
              />
            </div>

            <div>
              <label className="text-sm">Card Type</label>
              <input
                type="text"
                placeholder="Visa"
                disabled
                className={input}
              />
            </div>
          </div>
        </div>

        {/* Add New Card */}
        <div>
          <label className="text-sm font-medium">Add New Card</label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <input
              type="text"
              placeholder="Card Holder Name"
              className={input}
            />
            <input type="text" placeholder="Card Number" className={input} />
            <input type="text" placeholder="MM / YY" className={input} />
            <input type="text" placeholder="CVV" className={input} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end my-10">
          <Button variant="secondary" className="mr-4">
            Cancel
          </Button>
          <Button>Save Payment Method</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
