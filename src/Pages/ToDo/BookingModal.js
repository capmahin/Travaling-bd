import React from "react";

const BookingModal = ({ task, setTask }) => {
  const { _id, sluts } = task;
  const handleBooking = (event) => {
    event.preventDefault();
    const slut = event.target.slut.value;
    console.log(slut);

    const booking = {
      taskId: _id,
      slut,
      description: event.target.description.value,
    };
    setTask(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-center">To-Do List</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <select name="slut" class="select select-bordered w-full max-w-xs">
              {sluts.map((slut) => (
                <option value={slut}>{slut}</option>
              ))}
            </select>
            <textarea
              class="textarea textarea-bordered w-full"
              name="description"
              placeholder="Description"
            ></textarea>
            <input
              type="Submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
