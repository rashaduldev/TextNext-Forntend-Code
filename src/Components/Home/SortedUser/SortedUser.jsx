
const SortedUser = () => {
    return (
        <div className='max-w-52 px-5'>
          <div className="mb-4">
            <select id="dateType" name="dateType" className="mt-1 p-2 border rounded-md w-full">
            <option value="days">Sort by name</option>
            <option value="weeks">Sort by email</option>
            <option value="years">Sort by Company name</option>
            </select>
        </div>
        </div>
    );
};

export default SortedUser;