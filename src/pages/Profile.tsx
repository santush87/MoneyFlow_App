import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

export default function Profile() {
    const profile = useAppSelector((state: RootState) => state.profile);

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
            <div className="md:flex">
                <div className="p-8">
                    <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                        {profile.firstName} {profile.lastName}
                    </h1>
                    <p className="mt-2 text-gray-500">Email: {profile.email}</p>
                    <p className="mt-2 text-gray-500">Member since: {profile.createdOn}</p>
                    {/* Display other profile details */}
                </div>
            </div>
        </div>
    );
}