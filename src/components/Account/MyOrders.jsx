import Button from "../common/Button";

const ordersData = [
  {
    id: "ORD12345",
    date: "2026-01-01",
    status: "Delivered",
    total: "$120.00",
  },
  {
    id: "ORD12346",
    date: "2026-01-03",
    status: "Processing",
    total: "$75.00",
  },
  {
    id: "ORD12347",
    date: "2026-01-05",
    status: "Cancelled",
    total: "$50.00",
  },
];

const MyOrders = () => {
  return (
    <div className="max-w-217.5 mx-auto font-Poppins">
      <div className="bg-white rounded shadow-md py-8 px-4 sm:px-8 md:px-16">
        <h2 className="text-xl text-[#DB4444] mb-6">My Orders</h2>
        {ordersData.length === 0 ? (
          <p className="text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {ordersData.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 rounded p-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full sm:w-auto">
                  <p>
                    <span className="font-semibold">Order ID:</span> {order.id}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span> {order.date}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                      className={`font-semibold ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Processing"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Total:</span> {order.total}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 flex gap-2">
                  <Button variant="secondary">View Details</Button>
                  {order.status === "Processing" && (
                    <Button variant="danger">Cancel Order</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
