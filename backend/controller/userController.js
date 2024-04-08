import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
	const { firstName, lastName, email, phone, dob, nic, gender, role, password } = req.body;

	if (!firstName || !lastName || !email || !phone || !dob || !nic || !gender || !role || !password) {
		return next(new ErrorHandler("Please fill full user form!", 400));
	}

	let user = await User.findOne({ email });
	if (user) {
		return next(new ErrorHandler("User Already Registered!", 400));
	}

	user = await User.create({ firstName, lastName, email, phone, dob, nic, gender, role, password });

	// res.status(200).json({
	// 	success: true,
	// 	message: "User Registered Successfullly!",
	// });
	generateToken(user, "User Registered Successfullly!", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
	const { email, password, confirmPassword, role } = req.body;

	if (!email || !password || !confirmPassword || !role) {
		return next(new ErrorHandler("Please Provide All Details", 400));
	}
	if (password !== confirmPassword) {
		return next(new ErrorHandler("Password and confirmPassword does not match", 400));
	}

	const user = await User.findOne({ email }).select("+password");
	if (!user) {
		return next(new ErrorHandler("Invlaid Password or Email 1", 400));
	}

	const isPasswordMatch = await user.comparePassword(password);
	if (!isPasswordMatch) {
		return next(new ErrorHandler("Invlaid Password or Email 2", 400));
	}
	if (role !== user.role) {
		return next(new ErrorHandler("User with this role not found", 400));
	}
	//# after passing all the above constraints user will be logged in
	// res.status(200).json({
	// 	success: true,
	// 	message: "User Logged In Successfullly!",
	// });
	generateToken(user, "User Logged In Successfullly!!", 200, res);
});

export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
	const { firstName, lastName, email, phone, dob, nic, gender, password } = req.body;

	if (!firstName || !lastName || !email || !phone || !dob || !nic || !gender || !password) {
		return next(new ErrorHandler("Please fill full user form!", 400));
	}

	const isRegistered = await User.findOne({ email });
	if (isRegistered) {
		return next(new ErrorHandler(`${isRegistered.role} with this email already Exists!`));
	}

	const admin = await User.create({
		firstName,
		lastName,
		email,
		phone,
		dob,
		nic,
		gender,
		password,
		role: "Admin",
	});
	res.status(200).json({
		success: true,
		message: "New Admin Registered successfully",
	});
});
