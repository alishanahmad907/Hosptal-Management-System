import React from "react";

const Biography = ({ imageUrl }) => {
	return (
		<div className="container biography">
			<div className="banner">
				<img src={imageUrl} alt="aboutImg" />
			</div>
			<div className="banner">
				<p>Biography</p>
				<h3>Who We Are</h3>

				<p>
					From its inception, ZeeCare has been driven by a mission to provide compassionate, comprehensive, and cutting-edge healthcare services to the community it serves. Over the years, the institute has grown exponentially, expanding its range of medical services to meet the diverse needs of
					patients.
				</p>

				<p>
					At ZeeCare Medical Institute, excellence is not just a goal; it's a way of life. Every member of our team, from physicians and nurses to support staff, is dedicated to upholding the highest standards of clinical care and patient experience. Our state-of-the-art facilities are equipped with
					the latest medical technologies, ensuring accuracy, efficiency, and comfort throughout the treatment process.
				</p>

				<p>
					Looking ahead, ZeeCare Medical Institute remains steadfast in its commitment to its founding principles of compassion, excellence, and innovation. We envision a future where healthcare is accessible to all, where every patient receives the highest quality of care, and where innovation
					drives continuous improvement in healthcare delivery.
				</p>

				<p>As we continue on our journey, we are grateful for the trust and support of the community we serve. Together, we are shaping the future of healthcare and making a positive difference in the lives of those we touch.</p>
			</div>
		</div>
	);
};

export default Biography;
