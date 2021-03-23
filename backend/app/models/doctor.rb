class Doctor < ApplicationRecord
    has_many :reviews

    def doctor_reviews
        self.reviews
    end
end
