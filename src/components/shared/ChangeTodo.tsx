// import Form from '../ui/Form'
// import Input from '../ui/Input'
// import Button from '../ui/Button'
// import { change  } from "@/app/actions/TodoActions"
// import { todoTypes } from '../../../types/todoTypes';

// const ChangeTodo = ({ todo}: {todo:todoTypes}) => {
//   return (
//     <div>
//       <Form action={change}>
//         {/* Hidden input to send the todo ID */}
//         <Input 
//           name="inputId"
//           type="hidden"
//           value={todo.id}
          
//         />
//         {/* Button to submit the form and trigger the update */}
//         <Button
//           actionButton
//           type="submit"
//           text="Change"
//         />
//       </Form>
//     </div>
//   );
// };

// export default ChangeTodo;



import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { change } from "@/app/actions/TodoActions";
import { todoTypes } from '../../../types/todoTypes';

const ChangeTodo = ({ todo }: { todo: todoTypes }) => {
  return (
    <div>
      <Form action={change}>
        {/* Hidden input to send the todo ID */}
        <Input 
          name="inputId"
          type="hidden"
          value={todo.id}
        />
        {/* Button with SVG icon and text */}
        <Button
          actionButton
          type="submit"
          text={(
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block  bg-purple-800 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              
            </>
          )}
        />
      </Form>
    </div>
  );
};

export default ChangeTodo;
