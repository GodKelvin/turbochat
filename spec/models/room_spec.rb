require 'rails_helper'
RSpec.describe Room, type: :model do
  it "is valid with a name" do
    room = Room.new(name: "General")
    expect(room).to be_valid
  end

  it "is invalid without a name" do
    room = Room.new(name: nil)
    expect(room).not_to be_valid
  end
end
