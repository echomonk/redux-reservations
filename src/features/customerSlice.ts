import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (customer) => customer.id !== action.payload
      );
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
    removeFood: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.splice(customer.food.indexOf(action.payload.food), 1);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer, removeFood, deleteCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
