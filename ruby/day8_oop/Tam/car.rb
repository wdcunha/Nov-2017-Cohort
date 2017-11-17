class Car

  def initialize(model, type, capacity)
    # @model = model
    # @type  = type
    # @capacity = capacity
    @model, @type, @capacity = model, type, capacity
  end

  def drive
    ignite_engine
    p 'Driving the car'
  end

  def park
    p 'Parking the car'
  end

  def stop
    p 'Stopping the car'
  end

  def self.max_speed
    200
  end

  private

  def pump_gas
    p 'pumping the gas'
  end

  def ignite_engine
    p 'Igniting the engine'
  end

end
