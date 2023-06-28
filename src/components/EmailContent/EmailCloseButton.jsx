import { FiX } from "react-icons/fi";

export default function EmailCloseButton({ onClick }) {
    return (
        <button onClick={onClick} className="
        absolute top-2 right-2 p-1 rounded bg-red-300 hover:bg-red-400
        dark:bg-red-500 dark:hover:bg-red-700 transition">
            <FiX className="inline m-1" />
        </button>
    )
}