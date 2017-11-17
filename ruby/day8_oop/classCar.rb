class Car

  def initialize(model, type, capacity)
    # @model = model
    # @type = type
    # @capacity = capacity
    @model, @type, @capacity = mode, type, capacity
  end

  def drive
    # c = Car.new ### don't need to do it inside the same class
    # ignitEngine
    ignit_engine
    p "driving the car"
  end

  def stop
    p "Stop the car"
  end

  def park
    p "Time to park the car in a safe place please!"
  end

  def self.max_speed
    200
  end

  private

  def ignit_engine
    p "First ignit car engine"
  end

  def pump_gas
    p "Your car is almost out of gas...go to the next gas station!"
  end

end
