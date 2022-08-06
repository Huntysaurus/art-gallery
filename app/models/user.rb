class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, length: { in: 6..15 }
    validates :password_digest, presence: true, uniqueness: true, length: { in: 8..20 }
    validates :bio, length: { maximum: 500 }


    has_secure_password
end
