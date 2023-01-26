import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFoodToCustomer,
  deleteCustomer,
  removeFood,
} from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}
export const CustomerCard = ({ id, name, food }: CustomerCardTypes) => {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  return (
    <div>
      <div className="customer-food-card-container">
        <div
          onClick={() => dispatch(deleteCustomer(id))}
          className="customer-card"
          style={{ cursor: "pointer" }}
        >
          <p>{name}</p>
        </div>
        <div className="customer-foods-container">
          <div
            onClick={() =>
              dispatch(removeFood({ id, food: customerFoodInput }))
            }
            className="customer-food"
            style={{ cursor: "pointer" }}
          >
            {food.map((food, i) => {
              return (
                <div key={i}>
                  <p>{food}</p>
                </div>
              );
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={customerFoodInput}
              onChange={(e) => setCustomerFoodInput(e.target.value)}
            />
            <button
              onClick={() => {
                if (!customerFoodInput) return;
                dispatch(
                  addFoodToCustomer({
                    id,
                    food: customerFoodInput,
                  })
                );
                setCustomerFoodInput("");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
