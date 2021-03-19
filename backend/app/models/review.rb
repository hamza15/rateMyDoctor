class Review < ApplicationRecord
    belongs_to :doctor


    def doctor_name
        self.doctor.name
    end

    def doctor_speciality
        self.doctor.speciality
    end

    def doctor_location
        self.doctor.location
    end
    
    def doctor_image_url
        self.doctor.image_url
    end
end
