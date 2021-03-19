# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

first = Doctor.create(name: "Kim John", speciality: "Pediatrics", location: "NY", image_url: "https://ratemydoctor-images-bucket.s3.amazonaws.com/Kim-Jong-Un-Face-PNG-File.png")
Review.create(rating: 5, feedback: "Amazing experience. 10/10 would recommend.", doctor: first)

second = Doctor.create(name: "Alex Smith", speciality: "Orthopaedics", location: "VA", image_url: "https://ratemydoctor-images-bucket.s3.amazonaws.com/doc_1.png")
Review.create(rating: 1, feedback: "Horrible experience! Overcharges you.", doctor: second)

three = Doctor.create(name: "Laine Smith", speciality: "Family Medicine", location: "VA", image_url: "https://ratemydoctor-images-bucket.s3.amazonaws.com/doc_3.png")
Review.create(rating: 4, feedback: "Very professional and really helped my daughter.", doctor: three)

four = Doctor.create(name: "Rob Heaton", speciality: "Dermatology", location: "MD", image_url: "https://ratemydoctor-images-bucket.s3.amazonaws.com/doc_2.jpg")
Review.create(rating: 3, feedback: "Pretty average. Much better options out there.", doctor: four)

five = Doctor.create(name: "Jim Rose", speciality: "Pediatrics", location: "NY", image_url: "https://ratemydoctor-images-bucket.s3.amazonaws.com/doc_4.png")
Review.create(rating: 5, feedback: "Dr Rose is a blessing in disguise. Was super sweet to my mom. Would recommend to everyone.", doctor: five)

six= Doctor.create(name: "Wayne Johnson", speciality: "Radiology", location: "CA", image_url: "https://ratemydoctor-images-bucket.s3.amazonaws.com/doc_5.png")
Review.create(rating: 2, feedback: "Don't bother.", doctor: six)

seven = Doctor.create(name: "Smith Row", speciality: "Oncology", location: "CA", image_url: "https://ratemydoctor-images-bucket.s3.amazonaws.com/doc_6.png")
Review.create(rating: 4, feedback: "Dr Smith is amazing. Always my go to!", doctor: seven)

